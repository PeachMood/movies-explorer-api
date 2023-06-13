const { celebrate, Joi } = require('celebrate');

const ErrorMessagesBuilder = require('../../utils/messages/ErrorMessagesBuilder');

const emailMessages = new ErrorMessagesBuilder('email')
  .setType('string')
  .setRequired()
  .setEmpty()
  .setFormat('строка с адресом электронной почты')
  .build();

const passwordMessages = new ErrorMessagesBuilder('password')
  .setType('string')
  .setRequired()
  .setEmpty()
  .setFormat('строка')
  .build();

const nameMessages = new ErrorMessagesBuilder('name')
  .setType('string')
  .setRequired()
  .setEmpty()
  .setFormat('строка')
  .setLength(2, 30)
  .build();

const validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages(emailMessages.toJoi()),
    password: Joi.string().required().messages(passwordMessages.toJoi()),
  }),
});

const validateRegister = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required().messages(emailMessages.toJoi()),
    password: Joi.string().required().messages(passwordMessages.toJoi()),
    name: Joi.string().required().min(2).max(30)
      .messages(nameMessages.toJoi()),
  }),
});

const validateUpdateCurrentUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().messages(emailMessages.toJoi()),
    name: Joi.string().required().min(2).max(30)
      .messages(nameMessages.toJoi()),
  }),
});

module.exports = { validateLogin, validateRegister, validateUpdateCurrentUser };
