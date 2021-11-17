const express = require("express");
const router = express.Router();
let common = require("../../common/verifytoken");

const handlebook_controller = require("../../controllers/handlebook.controller");
router.post("/attach", common.verify_token, handlebook_controller.attach_book);
router.post("/detach", common.verify_token, handlebook_controller.detach_book);
router.get(
  "/get-user-books/:_id",
  common.verify_token,
  handlebook_controller.get_user_books
);

module.exports = router;
