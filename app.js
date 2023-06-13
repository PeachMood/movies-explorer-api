const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const appConfig = require('./configs/appConfig');
const dbConfig = require('./configs/dbConfig');
const corsResolver = require('./middlewares/corsResolver');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(corsResolver);
app.use(errorHandler);

mongoose.connect(dbConfig.uri);

app.listen(appConfig.port);
