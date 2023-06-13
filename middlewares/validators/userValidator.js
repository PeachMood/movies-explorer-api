const { celebrate, Joi } = require('celebrate');

const ErrorMessages = require('../../utils/ErrorMessages');

const emailMessagesBuilder = new ErrorMessages('email')
  .setRequired()
  .setType('строка с адресом электронной почты')
  .build();

const emailMessages = {
  'any.required': emailMessagesBuilder.messages.required,
  'string.base': emailMessagesBuilder.messages.type,
};

const passwordMessagesBuilder = new ErrorMessages('password')
  .setRequired()
  .setType('строка')
  .build();

const passwordMessages = {
  'any.required': passwordMessagesBuilder.messages.required,
  'string.base': passwordMessagesBuilder.messages.type,
};

const nameMessagesBuilder = new ErrorMessages('name')
  .setRequired()
  .setType('строка')
  .setLength(2, 30)
  .build();

const nameMessages = {
  'any.required': nameMessagesBuilder.messages.required,
  'string.base': nameMessagesBuilder.messages.type,
  'string.min': nameMessagesBuilder.messages.length,
  'string.max': nameMessagesBuilder.messages.length,
};

const validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages(emailMessages),
    password: Joi.string().required().messages(passwordMessages),
  }),
});

const validateRegister = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required().messages(emailMessages),
    password: Joi.string().required().messages(passwordMessages),
    name: Joi.string().required().min(2).max(30)
      .messages(nameMessages),
  }),
});

const validateUpdateCurrentUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().messages(emailMessages),
    name: Joi.string().required().min(2).max(30)
      .messages(nameMessages),
  }),
});

module.exports = { validateLogin, validateRegister, validateUpdateCurrentUser };
