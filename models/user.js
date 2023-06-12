const mongoose = require('mongoose');
const validator = require('validator');

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
      maxlength: 3,
    }
  }
}, { versionKey: false });

module.exports = mongoose.model('user', userSchema);
