let express = require("express");
let router = express.Router();

const users_api = require("./api/users.route");
router.use("/users", users_api);

const login_api = require("./api/login.route");
router.use("/login", login_api);

const books_api = require("./api/books.route");
router.use("/books", books_api);

const handlebooks_api = require("./api/handlebook.route");
router.use("/handlebooks", handlebooks_api);

const performance_api = require("./api/performance.route");
router.use("/performace", performance_api);

module.exports = router;
