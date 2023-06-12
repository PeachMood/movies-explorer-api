require('dotenv').config();

const { PORT, JWT_SECRET } = process.env;

const appConfig = {
  port: PORT || 3000,
  jwtSecret: JWT_SECRET || 'jwt-secret'
};

module.exports = appConfig;
