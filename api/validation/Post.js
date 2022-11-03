const yup = require("yup");
const { YupHelper } = require("../helpers");

module.exports = (data) => {
  const schema = yup.object().shape({
    title: yup.string().trim().required("Please enter title."),
    postType: yup.string().trim().required("Please enter post type."),
    shortDescription: yup.string().trim().required("Please enter a summary."),
    description: yup
      .string()
      .required("Please provide description.")
      .test(
        "validateJSONString",
        "Please enter proper description",
        function (value) {
          const { path, createError } = this;
          try {
            const newValue = JSON.parse(value);
            JSON.parse(JSON.stringify(newValue.blocks))[0].type;
            return true;
          } catch (error) {
            if (error.message.startsWith("Unexpected token") && value)
              return true;

            return createError({
              path,
              message: "Please enter proper description.",
            });
          }
        }
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
