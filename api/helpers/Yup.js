const getValidationErrors = (error) => {
  let message = {};
  (error.inner || []).forEach((err) => {
    if (!message[err.path]) {
      message[err.path] = err.message;
    }
  });
  return message;
};

module.exports = {
  getValidationErrors,
};
