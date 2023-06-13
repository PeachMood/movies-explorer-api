require('dotenv').config();

const { ALLOWED_ORIGINS, ALLOWED_METHODS } = process.env;
const getList = (string) => string.split(', ');

const corsConfig = {
  allowedOrigins: ALLOWED_ORIGINS ? getList(ALLOWED_ORIGINS) : ['http://localhost:3000', 'http://localhost:4200'],
  allowedMethods: ALLOWED_METHODS ? getList(ALLOWED_METHODS) : ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
};

module.exports = corsConfig;
