const HttpError = require('../utils/errors/HttpError');
const InternalServerError = require('../utils/errors/InternalServerError');

function errorHandler(err, req, res, next) {
  let response = err;
  if (!(err instanceof HttpError)) {
    response = new InternalServerError(`Ошибка сервера: ${err.message}.`);
  }
  res.status(response.status);
  res.json({ message: response.message });
}

module.exports = errorHandler;
