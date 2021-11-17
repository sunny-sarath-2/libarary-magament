let mongoose = require("mongoose");

let book_schema = mongoose.Schema({
  isbn: String,
  title: String,
  year_of_publish: Date,
  author_name: String,
  edition: String,
  price: Number,
  number_of_copies: Number,
  availability: Boolean,
  floor_no: Number,
  section_name: String,
  rack_no: Number,
});

let book_model = mongoose.model("book", book_schema);
module.exports = book_model;
