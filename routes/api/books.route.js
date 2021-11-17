const express = require("express");
const router = express.Router();
let common = require("../../common/verifytoken");

const books_controller = require("../../controllers/books.controller");
router.get("/", common.verify_token, books_controller.get_all_books);
router.get("/:search", common.verify_token, books_controller.search_book);
router.post("/", common.verify_token, books_controller.create_book);
router.put("/", books_controller.update_book);
router.delete("/:_id", books_controller.delete_book);
// router.delete("/:_id", common.verify_token, review_controller.review_delete);

module.exports = router;
