const { HttpError } = require('./base.js');
const { BAD_REQUEST, UNAUTHORIZED, FORBIDDEN, NOT_FOUND } = require('../utils/statusCodes.js');

class BadRequest extends HttpError {
  constructor(message = 'Bad Request') {
    super(BAD_REQUEST, message);
  }
}

class Unauthorized extends HttpError {
  constructor(message = 'Unauthorized') {
    super(UNAUTHORIZED, message);
  }
}

class Forbidden extends HttpError {
  constructor(message = 'Forbidden') {
    super(FORBIDDEN, message);
  }
}

class NotFound extends HttpError {
  constructor(message = 'Not Found') {
    super(NOT_FOUND, message);
  }
}

module.exports = {
  BadRequest,
  Unauthorized,
  Forbidden,
  NotFound,
};
