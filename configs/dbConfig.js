require('dotenv').config();

const { MONGO_HOST, MONGO_PORT, MONGO_DB } = process.env;

const dbConfig = {
  host: MONGO_HOST || '127.0.0.1',
  port: MONGO_PORT || 27017,
  name: MONGO_DB || 'moviesdb',
};

dbConfig.uri = `mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.name}`;

module.exports = dbConfig;
