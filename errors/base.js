class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

function isHttpError(error) {
  return typeof error === HttpError;
}

module.exports = { HttpError, isHttpError };
