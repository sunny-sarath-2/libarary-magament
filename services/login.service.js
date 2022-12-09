const user_model = require("../model/users.model");

exports.login_verify_service = async ({ email, password }) => {
  return await user_model.aggregate([
    {
      $match: {
        email,
        password,
        status: true,
      },
    },
  ]);
};
