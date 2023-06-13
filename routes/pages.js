const express = require('express');

const router = express.Router();

const NotFound = require('../utils/errors/NotFound');

router.all('*', (req, res, next) => {
  const NOT_FOUND_MESSAGE = 'Страница не найдена.';
  next(new NotFound(NOT_FOUND_MESSAGE));
});

module.exports = router;
