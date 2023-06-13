function setFirstLetterUppercase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class ErrorMessages {
  constructor(property = '') {
    this.property = property;
    this.messages = {};
  }

  setRequired() {
    this.messages.required = `Поле ${this.property} является обязательным`;
    return this;
  }

  setConflict(resource) {
    this.messages.conflict = `${setFirstLetterUppercase(resource)} с указанным ${this.property} не существует.`;
    return this;
  }

  setUnfound(resource) {
    this.messages.unfound = `${setFirstLetterUppercase(resource)} с указанным ${this.property} не найден.`;
    return this;
  }

  setType(type) {
    this.messages.type = `Поле ${this.property} должно быть следующего типа: ${type}.`;
    return this;
  }

  setLength(max, min) {
    if (!min) {
      this.messages.length = `Поле ${this.property} должно быть длинной ${max} символов.`;
    } else {
      this.messages.length = `Поле ${this.property} должно содержать от ${min} до ${max} символов.`;
    }
    return this;
  }

  setCustom(error, message) {
    this.messages[error] = message;
    return this;
  }

  build() {
    return new ErrorMessages(this);
  }
}

module.exports = ErrorMessages;
