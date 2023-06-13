function setFirstLetterUppercase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class ErrorMessages {
  constructor(property = '') {
    this.property = property;
    this.messages = {};
  }

  setEmpty() {
    this.empty = `Поле ${this.property} является обязательным`;
    return this;
  }

  setConflict(resource) {
    this.conflict = `${setFirstLetterUppercase(resource)} с указанным ${this.property} уже существует.`;
    return this;
  }

  setUnfound(resource) {
    this.unfound = `${setFirstLetterUppercase(resource)} с указанным ${this.property} не найден.`;
    return this;
  }

  setBase(base) {
    this.base = `Поле ${this.property} должно быть в следующем формате: ${base}.`;
    return this;
  }

  setLength(min, max) {
    this.length = `Поле ${this.property} должно содержать от ${min} до ${max} символов.`;
    return this;
  }

  setCustom(error, message) {
    this[error] = message;
    return this;
  }

  build() {
    return new ErrorMessages(this);
  }
}

module.exports = ErrorMessages;
