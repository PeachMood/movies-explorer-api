const { HttpError } = require('./base.js');

class BadRequest extends HttpError {
  constructor(message = 'Bad Request') {
    super(400, message);
  }
}

class Unauthorized extends HttpError {
  constructor(message = 'Unauthorized') {
    super(401, message);
  }
}

class Forbidden extends HttpError {
  constructor(message = 'Forbidden') {
    super(403, message);
  }
}

class NotFound extends HttpError {
  constructor(message = 'Not Found') {
    super(404, message);
  }
}

module.exports = {
  BadRequest,
  Unauthorized,
  Forbidden,
  NotFound,
}
