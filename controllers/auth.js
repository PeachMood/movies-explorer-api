const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Error } = require('mongoose');

const { ValidationError } = Error;

const appConfig = require('../configs/appConfig');
const User = require('../models/user');
const StatusCodes = require('../utils/StatusCodes');
const BadRequest = require('../utils/errors/BadRequest');
const Conflict = require('../utils/errors/Conflict');

function register(req, res, next) {
  const { saltLength } = appConfig;
  const { email, password, name } = req.body;

  bcrypt.hash(password, saltLength)
    .then((hash) => User.create({ email, name, password: hash }))
    .then((user) => res.status(StatusCodes.CREATED).json(user))
    .catch((error) => {
      if (error instanceof ValidationError) {
        next(new BadRequest(error.message));
      } else if (error.code === 11000) {
        next(new Conflict('Пользователь с указанным email уже существует.'));
      } else {
        next(error);
      }
    });
}

function login(req, res, next) {
  const { jwtSecret, expiresInSec } = appConfig;
  const { email, password } = req.body;

  User.findUserByCredentials({ email, password })
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, jwtSecret, { expiresIn: expiresInSec });

      const options = { httpOnly: true, maxAge: expiresInSec * 1000 };
      res.cookie('jwt', token, options).send('Пользователь успешно авторизован.');
    })
    .catch(next);
}

function logout(req, res, next) {
  res.clearCookie('jwt', { sameSite: 'none', secure: true }).send('Пользователь успешно покинул сайт.');
}

module.exports = { register, login, logout };
