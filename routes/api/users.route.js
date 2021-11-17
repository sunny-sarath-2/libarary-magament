const express = require("express");
const router = express.Router();
let common = require("../../common/verifytoken");

const users_controller = require("../../controllers/users.controller");
router.get("/", common.verify_token, users_controller.get_all_users);
router.get("/:_id", common.verify_token, users_controller.get_user);
router.get(
  "/search/:search",
  common.verify_token,
  users_controller.search_users
);
router.post("/", users_controller.post_user);
router.put("/", users_controller.put_user);
router.delete("/:_id", users_controller.delete_user);
// router.delete("/:_id", common.verify_token, review_controller.review_delete);

module.exports = router;
