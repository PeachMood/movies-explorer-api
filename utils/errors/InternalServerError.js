const { HttpError } = require('./HttpError');
const { INTERNAL_SERVER_ERROR } = require('../StatusCodes');

class InternalServerError extends HttpError {
  constructor(message = 'Internal Server Error') {
    super(INTERNAL_SERVER_ERROR, message);
  }
}

module.exports = InternalServerError;
