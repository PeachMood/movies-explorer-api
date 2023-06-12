const jwt = require('jsonwebtoken');

const appConfig = require('../configs/appConfig');
const errorMessages = require('../utils/errorMessages');
const { Unauthorized } = require('../errors/errors');

const authVerifier = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    next(new Unauthorized(errorMessages.auth.token));
    return;
  }

  let payload;
  try {
    payload = jwt.verify(token, appConfig.jwtSecret);
  } catch (err) {
    next(new Unauthorized(errorMessages.auth.token));
    return;
  }
  req.auth = { userId: payload._id };
  next();
};

module.exports = authVerifier;
