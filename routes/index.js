const express = require('express');

const router = express.Router();

const authVerifier = require('../middlewares/authVerifier');
const authRouter = require('./auth');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const pagesRouter = require('./pages');

router.use('/', authRouter);
router.use('/users', authVerifier, usersRouter);
router.use('/movies', authVerifier, moviesRouter);
router.all('*', authVerifier, pagesRouter);

module.exports = router;
