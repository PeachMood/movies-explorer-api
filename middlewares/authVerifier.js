const jwt = require('jsonwebtoken');

const appConfig = require('../configs/appConfig');
const Unauthorized = require('../utils/errors/Unauthorized');

function authVerifier(req, res, next) {
  const token = req.cookies.jwt;

  if (!token) {
    next(new Unauthorized('Требуется авторизация.'));
    return;
  }

  let payload;
  try {
    payload = jwt.verify(token, appConfig.jwtSecret);
  } catch (err) {
    next(new Unauthorized('Требуется авторизация.'));
    return;
  }
  req.auth = { userId: payload._id };
  next();
}

module.exports = authVerifier;
