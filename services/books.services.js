const books_model = require("../model/books.model");
const users_model = require("../model/users.model");

exports.get_all_books_service = async () => {
  return await books_model.find();
};

exports.search_books_service = async (title) => {
  return await books_model.find({ title: new RegExp(title, "i") });
};

exports.create_books_service = (data) => {
  let new_book = new books_model(data);
  return new_book.save();
};

exports.update_books_service = async (data) => {
  let id = data._id;
  delete data._id;
  return await books_model.updateOne({ _id: id }, { $set: data });
};

exports.delete_books_service = async (id) => {
  return await books_model.deleteOne({ _id: id });
};
