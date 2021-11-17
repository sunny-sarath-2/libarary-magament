let express = require("express");
let router = express.Router();

let performance_controller = require("../../controllers/performance.controller");

router.get(
  "/user/:total_users/:starting_with",
  performance_controller.createTestUsers
);
router.get(
  "/book/:total_users/:starting_with",
  performance_controller.createTestBooks
);
module.exports = router;
