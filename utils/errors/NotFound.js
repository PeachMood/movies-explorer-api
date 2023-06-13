const { HttpError } = require('./HttpError');
const { NOT_FOUND } = require('../StatusCodes');

class NotFound extends HttpError {
  constructor(message = 'Not Found') {
    super(NOT_FOUND, message);
  }
}

module.exports = NotFound;
