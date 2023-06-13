const { HttpError } = require('./HttpError');
const { FORBIDDEN } = require('../StatusCodes');

class Forbidden extends HttpError {
  constructor(message = 'Forbidden') {
    super(FORBIDDEN, message);
  }
}

module.exports = Forbidden;
