const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const ErrorMessagesBuilder = require('../../utils/messages/ErrorMessagesBuilder');

const idMessages = new ErrorMessagesBuilder('movieId')
  .setType('string')
  .setRequired()
  .setEmpty()
  .setFormat('шестнадцатеричный идентификатор')
  .setLength(24)
  .setCustom('string.hex', 'Поле movieId должно сдержать только шестнадцатеричные числа.')
  .build();

const countryMessages = new ErrorMessagesBuilder('country')
  .setType('string')
  .setRequired()
  .setEmpty()
  .setFormat('строка')
  .build();

const directorMessages = new ErrorMessagesBuilder('director')
  .setType('string')
  .setRequired()
  .setEmpty()
  .setFormat('строка')
  .build();

const durationMessages = new ErrorMessagesBuilder('duration')
  .setType('number')
  .setRequired()
  .setFormat('время в секундах')
  .build();

const yearMessages = new ErrorMessagesBuilder('year')
  .setType('string')
  .setRequired()
  .setEmpty()
  .setFormat('год из 4 цифр')
  .setLength(4)
  .build();

const descriptionMessages = new ErrorMessagesBuilder('description')
  .setType('string')
  .setRequired()
  .setEmpty()
  .setFormat('строка')
  .build();

const nameRUMessages = new ErrorMessagesBuilder('nameRU')
  .setType('string')
  .setRequired()
  .setEmpty()
  .setFormat('строка')
  .build();

const nameENMessages = new ErrorMessagesBuilder('nameEN')
  .setType('string')
  .setRequired()
  .setEmpty()
  .setFormat('строка')
  .build();

const imageMessages = new ErrorMessagesBuilder('image')
  .setType('string')
  .setRequired()
  .setEmpty()
  .setFormat('строка c URL-адресом')
  .build();

const trailerLinkMessages = new ErrorMessagesBuilder('trailerLink')
  .setType('string')
  .setRequired()
  .setEmpty()
  .setFormat('строка c URL-адресом')
  .build();

const thumbnailMessages = new ErrorMessagesBuilder('thumbnail')
  .setType('string')
  .setRequired()
  .setEmpty()
  .setFormat('строка c URL-адресом')
  .build();

const movieIdMessages = new ErrorMessagesBuilder('movieId')
  .setType('number')
  .setRequired()
  .setFormat('число')
  .build();

const validateUrl = (value, helper, message) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helper.message(message);
};

const validateDeleteMovie = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().hex().length(24).required()
      .messages(idMessages.toJoi()),
  }),
});

const validateCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().messages(countryMessages.toJoi()),
    director: Joi.string().required().messages(directorMessages.toJoi()),
    duration: Joi.number().required().messages(durationMessages.toJoi()),
    year: Joi.string().required().length(4).messages(yearMessages.toJoi()),
    description: Joi.string().required().messages(descriptionMessages.toJoi()),
    nameRU: Joi.string().required().messages(nameRUMessages.toJoi()),
    nameEN: Joi.string().required().messages(nameENMessages.toJoi()),
    image: Joi.string().required()
      .custom((value, helper) => validateUrl(value, helper, imageMessages.format))
      .messages(imageMessages.toJoi()),
    trailerLink: Joi.string().required()
      .custom((value, helper) => validateUrl(value, helper, trailerLinkMessages.format))
      .messages(trailerLinkMessages.toJoi()),
    thumbnail: Joi.string().required()
      .custom((value, helper) => validateUrl(value, helper, thumbnailMessages.format))
      .messages(thumbnailMessages.toJoi()),
    movieId: Joi.number().required().messages(movieIdMessages.toJoi()),
  }),
});

module.exports = { validateDeleteMovie, validateCreateMovie };
