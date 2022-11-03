const yup = require("yup");
const { YupHelper } = require("../helpers");
const { UserModel } = require("../models");

module.exports = async (data, userId) => {
  const schema = yup.object().shape({
    username: yup
      .string()
      .trim()
      .required("Please enter username.")
      .test(
        "validateDuplicateUsername",
        "This username is not available.",
        function (value) {
          const { path, createError } = this;
          return UserModel.findOne({
            username: value,
            _id: {
              $ne: userId,
            },
          })
            .then((user) => {
              try {
                if (user) {
                  throw new Error("This username is not available");
                }
                return true;
              } catch (error) {
                return createError({
                  path,
                  message: "This username is not available.",
                });
              }
            })
            .catch(() =>
              createError({
                path,
                message: "This username is not available.",
              })
            );
        }
      ),
    firstName: yup.string().trim().required("Please enter first name."),
    lastName: yup.string().trim().required("Plesae enter last name"),
    phoneNumber: yup
      .string()
      .trim()
      .notRequired()
      .min(10, "Phone number should be at least of 10 character.")
      .max(13, "Phone number should not be more than 13 character."),
    gender: yup
      .string()
      .trim()
      .notRequired()
      .oneOf(["male", "female", "other"], "Invalid gender."),
    address: yup.string().trim().optional(),
    state: yup.string().trim().optional(),
    city: yup.string().trim().optional(),
    pincode: yup
      .string()
      .trim()
      .notRequired()
      .length(6, "Pin code should be of 6 digits."),
    about: yup.string().trim().optional(),
  });
  let isValid = false;
  let errors = [];
  try {
    await schema.validate(data, {
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
