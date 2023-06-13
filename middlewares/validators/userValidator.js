const { celebrate, Joi } = require('celebrate');

const isUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required(),
    name: Joi.string().required().min(2).max(30),
  }),
});

module.exports = { isUser };
