require('dotenv').config();

const { NODE_ENV, PORT, DOMAIN, JWT_SECRET } = process.env;

const appConfig = {
  mode: NODE_ENV || 'development',
  port: PORT || 3000,
  domain: DOMAIN || 'localhost',
  jwtSecret: JWT_SECRET || 'jwt-secret',
  expiresInSec: 7 * 24 * 60 * 60,
  saltLength: 10,
};

module.exports = appConfig;
