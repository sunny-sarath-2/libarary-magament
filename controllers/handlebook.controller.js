const handlebook_service = require("../services/handlebook.service");
const md5 = require("md5");

exports.attach_book = async (req, res) => {
  let data = req.body;
  data.password = md5(data.password);
  data.books.push(data.newBookId);
  console.log(data);
  let result = await handlebook_service.handle_book_service(data);
  res.status(200).json({ result: result });
};

exports.detach_book = async (req, res) => {
  let data = req.body;
  data.password = md5(data.password);
  const index = data.books.indexOf(data.oldBookId);
  if (index > -1) {
    data.books.splice(index, 1);
  }
  let result = await handlebook_service.handle_book_service(data);
  res.status(200).json({ result: result });
};

exports.get_user_books = async (req, res) => {
  let result = await handlebook_service.get_user_books_service(req.params._id);
  res.status(200).json({ result: result });
};
