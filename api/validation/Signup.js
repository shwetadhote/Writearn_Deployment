const yup = require("yup");
const { YupHelper } = require("../helpers");

module.exports = (data) => {
  const schema = yup.object().shape({
    firstName: yup.string().trim().required("Please enter first name."),
    lastName: yup.string().trim().required("Please enter last name."),
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
    confirmPassword: yup
      .string()
      .trim()
      .oneOf(
        [yup.ref("password")],
        "Password and confirm password didn't match."
      ),
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
