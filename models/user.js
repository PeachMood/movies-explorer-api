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
}, { versionKey: false });

userSchema.methods.toJSON = function toJSON() {
  const data = this.toObject();
  delete data.password;
  return data;
};

userSchema.statics.findUserByCredentials = function findUserByCredentials(credentials) {
  const { email, password } = credentials;

  return this.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        throw new Unauthorized('Неправильные почта или пароль.');
      }

      return bcrypt.compare(password, user.password)
        .then((iMatched) => {
          if (!iMatched) {
            throw new Unauthorized('Неправильные почта или пароль.');
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
