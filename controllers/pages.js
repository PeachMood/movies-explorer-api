const NotFound = require('../utils/errors/NotFound');

function sendNotFound(req, res, next) {
  const NOT_FOUND_MESSAGE = 'Страница не найдена.';
  next(new NotFound(NOT_FOUND_MESSAGE));
}

module.exports = { sendNotFound };
