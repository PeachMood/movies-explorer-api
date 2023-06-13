const { HttpError } = require('./HttpError');
const { UNAUTHORIZED } = require('../StatusCodes');

class Unauthorized extends HttpError {
  constructor(message = 'Unauthorized') {
    super(UNAUTHORIZED, message);
  }
}

module.exports = Unauthorized;
