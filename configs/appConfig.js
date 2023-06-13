require('dotenv').config();

const { PORT, JWT_SECRET } = process.env;

const appConfig = {
  port: PORT || 3000,
  jwtSecret: JWT_SECRET || 'jwt-secret',
  expiresInSec: 7 * 24 * 60 * 60,
  saltLength: 10,
};

module.exports = appConfig;
