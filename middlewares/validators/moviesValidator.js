const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const ErrorMessages = require('../../utils/ErrorMessages');

const movieIdMessagesBuilder = new ErrorMessages('movieId')
  .setRequired()
  .setType('шестнадцатеричный идентификатор')
  .setLength(24)
  .build();

const movieIdMessages = {
  'any.required': movieIdMessagesBuilder.messages.required,
  'string.base': movieIdMessagesBuilder.messages.type,
  'string.hex': movieIdMessagesBuilder.messages.type,
  'string.length': movieIdMessagesBuilder.messages.length,
};

const validateDeleteMovie = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().hex().length(24).required()
      .messages(movieIdMessages),
  }),
});

const movieMessagesBuilder = new ErrorMessages()
  .setCustom('invalid', 'Поле не соответсвует указанному типу.')
  .setCustom('url', 'Поле должно быть строкой с URL-адресом')
  .build();

const movieMessages = movieMessagesBuilder.messages;

function validateUrl(value, helper) {
  return validator.isURL(value) ? value : helper.message(movieMessages.url);
}

const validateCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().message(movieMessages.invalid),
    director: Joi.string().required().message(movieMessages.invalid),
    duration: Joi.number().required().message(movieMessages.invalid),
    year: Joi.string().required().message(movieMessages.invalid),
    description: Joi.string().required().message(movieMessages.invalid),
    nameRU: Joi.string().required().message(movieMessages.invalid),
    nameEN: Joi.string().required().message(movieMessages.invalid),
    image: Joi.string().required().custom(validateUrl).message(movieMessages.invalid),
    trailer: Joi.string().required().custom(validateUrl).message(movieMessages.invalid),
    thumbnail: Joi.string().required().custom(validateUrl).message(movieMessages.invalid),
    movieId: Joi.number().required().message(movieMessages.invalid),
  }),
});

module.exports = { validateDeleteMovie, validateCreateMovie };
