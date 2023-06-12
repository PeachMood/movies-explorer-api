const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const appConfig = require('./configs/appConfig');
const dbConfig = require('./configs/dbConfig');

const app = express();

app.use(cookieParser());

mongoose.connect(dbConfig.uri);

app.listen(appConfig.port);
