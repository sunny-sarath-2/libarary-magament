const jwt = require("jsonwebtoken");

exports.verify_token = async (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    try {
      let result = await jwt.verify(bearerToken, "secret");
      next();
    } catch (error) {
      res.status(401).json({
        result: [],
        message: error,
      });
    }
  } else {
    // Forbidden
    res.sendStatus(403);
  }
};
