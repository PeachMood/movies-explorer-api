const { isCelebrateError } = require('celebrate');

const BadRequest = require('../../utils/errors/BadRequest');

function getFirstErrorMessage(error) {
  const errorBody = error.details.entries().next().value[1];
  const { details: [errorDetails] } = errorBody;
  return errorDetails.message;
}

function joiHandler(err, req, res, next) {
  if (!isCelebrateError(err)) {
    next(err);
    return;
  }
  const message = getFirstErrorMessage(err);
  next(new BadRequest(message));
}

module.exports = joiHandler;
