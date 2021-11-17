const md5 = require("md5");
const login_service = require("../services/login.service");
const jwt = require("jsonwebtoken");

exports.verify_user_controller = async (req, res) => {
  req.body.password = md5(req.body?.password);
  console.log(req.body);
  let result = await login_service.login_verify_service(req.body);
  console.log(result);
  if (result.length == 0)
    res.status(401).json({
      token: "",
      status: 401,
      result: result,
      message: "failed to login",
    });
  else
    jwt.sign(
      {
        data: result,
      },
      "secret",
      { expiresIn: "24h" },
      (err, token) => {
        res.status(200).json({
          token: token,
          status: 200,
          result: result,
          message: "successfully logged in",
        });
      }
    );
};
