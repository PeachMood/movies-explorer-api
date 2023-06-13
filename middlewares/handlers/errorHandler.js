const HttpError = require('../../utils/errors/HttpError');
const InternalServerError = require('../../utils/errors/InternalServerError');

function errorHandler(err, req, res, next) {
  let error = err;
  if (!(err instanceof HttpError)) {
    error = new InternalServerError(`Ошибка сервера: ${err.message}.`);
  }
  res.status(error.status);
  res.json({ message: error.message });
}

module.exports = errorHandler;
