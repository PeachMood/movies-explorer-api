const { HttpError } = require('./HttpError');
const { BAD_REQUEST } = require('../StatusCodes');

class BadRequest extends HttpError {
  constructor(message = 'Bad Request') {
    super(BAD_REQUEST, message);
  }
}

module.exports = BadRequest;
