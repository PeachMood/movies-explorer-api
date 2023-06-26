const ErrorMessages = require('./ErrorMessages');

class ErrorMessagesBuilder {
  constructor(property) {
    this.property = property;
    this.custom = {};
  }

  setType(type) {
    this.type = type;
    return this;
  }

  setRequired() {
    this.required = `Поле ${this.property} является обязательным.`;
    return this;
  }

  setEmpty() {
    this.empty = `Поле ${this.property} не должно быть пустым.`;
    return this;
  }

  setFormat(format) {
    this.format = `Поле ${this.property} должно быть следующего формата: ${format}.`;
    return this;
  }

  setLength(min, max) {
    if (!max) {
      this.length = `Поле ${this.property} должно быть длинной ${min}.`;
    } else {
      this.length = `Поле ${this.property} должно быть длинной от ${min} до ${max}.`;
    }
    return this;
  }

  setCustom(error, message) {
    this.custom[error] = message;
    return this;
  }

  build() {
    return new ErrorMessages(this);
  }
}

module.exports = ErrorMessagesBuilder;
