const users_model = require("../model/users.model");

exports.get_all_users_service = async () => {
  return await users_model.find();
};

exports.get_user_service = async (_id) => {
  return await users_model.findById(_id);
};

exports.search_user_service = async (username) => {
  return await users_model.find({ username: new RegExp(username, "i") });
};

exports.post_user_service = (data) => {
  let new_user = new users_model(data);
  return new_user.save();
};

exports.put_user_service = async (data) => {
  let id = data._id;
  delete data._id;
  return await users_model.updateOne({ _id: id }, { $set: data });
};

exports.delete_user_service = async (id) => {
  return await users_model.updateOne({ _id: id }, { $set: { status: false } });
};
