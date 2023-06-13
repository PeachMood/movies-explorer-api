class ErrorMessages {
  constructor(builder) {
    this.property = builder.property;
    this.type = builder.type;
    this.required = builder.required;
    this.empty = builder.empty;
    this.length = builder.length;
    this.format = builder.format;
    this.custom = { ...builder.custom };
  }

  toJoi() {
    const joi = { ...this.custom };
    if (this.required) {
      joi['any.required'] = this.required;
    }
    if (this.empty) {
      joi['string.empty'] = this.empty;
    }
    if (this.length) {
      joi['string.min'] = this.length;
      joi['string.max'] = this.length;
      joi['string.length'] = this.length;
    }
    if (this.format) {
      joi[`${this.type}.base`] = this.format;
    }
    return joi;
  }
}

module.exports = ErrorMessages;
