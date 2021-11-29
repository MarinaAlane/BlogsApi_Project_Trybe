module.exports = class ErrorWithCode extends Error {
  constructor({ message, code }) {
    super(message);
    this.code = code;
  }
};
