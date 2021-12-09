// Reference: https://github.com/lukeautry/tsoa/issues/150

module.exports = (status) => {
  const error = new Error();
  error.statusCode = status;
  return error;
};
