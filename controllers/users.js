const { Error } = require('mongoose');

const { ValidationError } = Error;

const User = require('../models/user');
const StatusCodes = require('../utils/StatusCodes');
const BadRequest = require('../utils/errors/BadRequest');

function getCurrentUser(req, res, next) {
  const { userId } = req.auth;

  User.findById(userId)
    .then((currentUser) => res.status(StatusCodes.OK).json(currentUser.toJSON()))
    .catch((error) => next(error));
}

function updateCurrentUser(req, res, next) {
  const { userId } = req.auth;
  const user = req.body;

  User.findByIdAndUpdate(userId, user, { new: true, runValidators: true })
    .orFail()
    .then((updatedUser) => res.status(StatusCodes.OK).json(updatedUser.toJSON()))
    .catch((error) => {
      if (error instanceof ValidationError) {
        next(new BadRequest(error.message));
      } else {
        next(error);
      }
    });
}

module.exports = { getCurrentUser, updateCurrentUser };
