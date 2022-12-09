let mongoose = require("mongoose");

let user_schema = mongoose.Schema({
  username: String,
  lastName: String,
  password: String,
  email: String,
  type: Number,
  status: Boolean,
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "book",
    },
  ],
});

let user_model = mongoose.model("users", user_schema);
module.exports = user_model;
