const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const Unauthorized = require('../utils/errors/Unauthorized');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
    },
    password: {
      type: String,
      select: false,
      required: true,
    },
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
  },
}, { versionKey: false });

userSchema.statics.findUserByCredentials = function findUserByCredentials(credentials) {
  const INCORRECT_CREDENTIALS_MESSAGE = 'Неправильные почта или пароль.';
  const { email, password } = credentials;

  return this.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        throw new Unauthorized(INCORRECT_CREDENTIALS_MESSAGE);
      }

      return bcrypt.compare(password, user.password)
        .then((iMatched) => {
          if (!iMatched) {
            throw new Unauthorized(INCORRECT_CREDENTIALS_MESSAGE);
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
