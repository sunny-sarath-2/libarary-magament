const jwt = require("jsonwebtoken");

exports.verify = (token, key) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, key, (err, authdata) => {
      if (err) reject({ err, status: false });
      else resolve({ authdata, status: true });
    });
  });
