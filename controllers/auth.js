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
  const USER_EXISTS_MESSAGE = 'Пользователь с указанным email уже существует.';

  const { saltLength } = appConfig;
  const { email, password, name } = req.body;

  bcrypt.hash(password, saltLength)
    .then((hash) => User.create({ email, name, password: hash }))
    .then((user) => res.status(StatusCodes.CREATED).json(user))
    .catch((error) => {
      if (error instanceof ValidationError) {
        next(new BadRequest(error.message));
      } else if (error.code === 11000) {
        next(new Conflict(USER_EXISTS_MESSAGE));
      } else {
        next(error);
      }
    });
}

function login(req, res, next) {
  const SUCCESS_MESSAGE = 'Пользователь успешно авторизован.';

  const { jwtSecret, expiresInSec } = appConfig;
  const { email, password } = req.body;

  User.findUserByCredentials({ email, password })
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, jwtSecret, { expiresIn: expiresInSec });

      const options = { httpOnly: true, maxAge: expiresInSec * 1000 };
      res.cookie('jwt', token, options).send(SUCCESS_MESSAGE);
    })
    .catch(next);
}

function logout(req, res, next) {
  const SUCCESS_MESSAGE = 'Пользователь успешно покинул сайт.';
  res.clearCookie('jwt', { sameSite: 'none', secure: true }).send(SUCCESS_MESSAGE);
}

module.exports = { register, login, logout };
