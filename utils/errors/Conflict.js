const HttpError = require('./HttpError');
const { CONFLICT } = require('../StatusCodes');

class Conflict extends HttpError {
  constructor(message = 'Conflict') {
    super(CONFLICT, message);
  }
}

module.exports = Conflict;
