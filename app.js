const express = require('express');
const mongoose = require('mongoose');

const appConfig = require('./configs/appConfig');
const dbConfig = require('./configs/dbConfig');

const app = express();

mongoose.connect(dbConfig.uri);

app.listen(appConfig.port);
