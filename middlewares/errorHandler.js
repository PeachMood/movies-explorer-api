const { isCelebrateError, } = require('celebrate');

const HttpError = require('../utils/errors/HttpError');
const BadRequest = require('../utils/errors/BadRequest');
const InternalServerError = require('../utils/errors/InternalServerError');

const getErrorMessage = (error) => {
  for (const [segment, joiError] of error.details.entries()) {
    return joiError.message;
  }
};

function errorHandler(err, req, res, next) {
  let response = err;
  if (isCelebrateError(err)) {
    response = new BadRequest(getErrorMessage(err));
  } else if (!(err instanceof HttpError)) {
    response = new InternalServerError(`Ошибка сервера: ${err.message}.`);
  }
  res.status(response.status);
  res.json({ message: response.message });
}

module.exports = errorHandler;
