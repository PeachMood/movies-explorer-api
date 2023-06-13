const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const appConfig = require('./configs/appConfig');
const dbConfig = require('./configs/dbConfig');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(errorHandler);

mongoose.connect(dbConfig.uri);

app.listen(appConfig.port);
