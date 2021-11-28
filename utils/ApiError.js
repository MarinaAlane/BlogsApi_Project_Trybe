const HTTP_STATUS = require('./HttpCodes');

class ApiError {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }

  static alreadyRegistered() {
    return new ApiError(
      HTTP_STATUS.code.CONFLICT,
      HTTP_STATUS.EMAIL_ALREADY_EXIST,
    );
  }

  static emptyEmail() {
    return new ApiError(
      HTTP_STATUS.code.BAD_REQUEST,
      HTTP_STATUS.EMAIL_NOT_ALLOWED,
    );
  }

  static emptyPassword() {
    return new ApiError(
      HTTP_STATUS.code.BAD_REQUEST,
      HTTP_STATUS.PASSWORD_NOT_ALLOWED,
    );
  }

  static internalServerError() {
    return new ApiError(
      HTTP_STATUS.code.INTERNAL_SERVER_ERROR,
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
    );
  }

  static invalidDisplayName() {
    return new ApiError(
      HTTP_STATUS.code.BAD_REQUEST,
      HTTP_STATUS.INVALID_DISPLAY_NAME,
    );
  }

  static invalidPassword() {
    return new ApiError(
      HTTP_STATUS.code.BAD_REQUEST,
      HTTP_STATUS.INVALID_PASSWORD,
    );
  }

  static invalidEmail() {
    return new ApiError(
      HTTP_STATUS.code.BAD_REQUEST,
      HTTP_STATUS.INVALID_EMAIL,
    );
  }

  static requiredEmail() {
    return new ApiError(
      HTTP_STATUS.code.BAD_REQUEST,
      HTTP_STATUS.EMAIL_REQUIRED,
    );
  }

  static requiredPassword() {
    return new ApiError(
      HTTP_STATUS.code.BAD_REQUEST,
      HTTP_STATUS.PASSWORD_REQUIRED,
    );
  }
}

module.exports = ApiError;