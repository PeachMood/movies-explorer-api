require('dotenv').config();

const { PORT } = process.env;

const appConfig = {
  port: PORT || 3000,
};

module.exports = appConfig;
