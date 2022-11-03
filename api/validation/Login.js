const yup = require("yup");
const { YupHelper } = require("../helpers");

module.exports = (data) => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .trim()
      .required("Please enter email.")
      .email("Please enter valid email."),
    password: yup
      .string()
      .trim()
      .required("Please enter password.")
      .min(6, "Please enter at least 6 digit password.")
      .max(20, "Password should not be more than 20 characters."),
  });
  let isValid = false;
  let errors = [];
  try {
    schema.validateSync(data, {
      abortEarly: false,
    });
    isValid = true;
  } catch (error) {
    errors = YupHelper.getValidationErrors(error);
  }
  return {
    errors,
    isValid,
  };
};
