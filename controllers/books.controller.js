const books_service = require("../services/books.services");

exports.get_all_books = async (req, res) => {
  let data = await books_service.get_all_books_service();
  res.status(200).json({ result: data, message: "list of all users" });
};

exports.search_book = async (req, res) => {
  let data = await books_service.search_books_service(req.params.search);
  res.status(200).json({ result: data, message: "users" });
};

exports.create_book = async (req, res) => {
  let result = await books_service.create_books_service(req.body);
  res.status(200).json({
    status: 200,
    result: result,
    message: "user successfully created",
  });
};

exports.update_book = async (req, res) => {
  let data = req.body;
  let result = await books_service.update_books_service(data);
  res.status(200).json({ test: result });
};

exports.delete_book = async (req, res) => {
  let result = await books_service.delete_books_service(req.params._id);
  res.status(200).json({
    status: 200,
    result: result,
    message: "successfully deleted user",
  });
};
