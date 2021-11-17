let express = require("express");
let router = express.Router();

let login_controller = require("../../controllers/login.controller");

router.post("/", login_controller.verify_user_controller);

module.exports = router;
