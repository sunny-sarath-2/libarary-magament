const users_model = require("../model/users.model");

exports.handle_book_service = async (data) => {
  let id = data._id;
  delete data._id;
  return await users_model.updateOne({ _id: id }, { $set: data });
};

exports.get_user_books_service = async (_id) => {
  return await users_model.findById(_id).populate("books");
};
