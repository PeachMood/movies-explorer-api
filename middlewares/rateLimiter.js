const rateLimit = require('express-rate-limit');

const rateLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000,
  max: 100,
  message: 'Допустимое количество запросов превышено. Пожалуйста, попробуйте позже.',
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = rateLimiter;
