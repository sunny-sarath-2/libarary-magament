const users_service = require("../services/users.service");
const books_service = require("../services/books.services");

var Fakerator = require("fakerator");
var fakerator = Fakerator();
const md5 = require("md5");

exports.createTestUsers = async (req, res) => {
  const { total_users, starting_with } = req.params;
  for (let i = starting_with; i < total_users; i++) {
    let fakeUser = fakerator.entity.user();
    let name = fakeUser.firstName;
    let user = {
      username: name.toLowerCase(),
      password: md5("123"),
      email: fakeUser.email,
      type: fakerator.times(fakerator.random.number, 1, 1, 2)[0],
      status: true,
      books: [],
    };
    await users_service.post_user_service(user);
  }

  res.json({ result: "completed" });
};

exports.createTestBooks = async (req, res) => {
  const { total_users, starting_with } = req.params;
  let books = [];
  for (let i = starting_with; i < total_users; i++) {
    let post = fakerator.entity.post();
    let title = post.title;
    title = title.replace(".", "");

    let book = {
      isbn: `A${fakerator.random.number(100000000, 999999999)}`,
      title: title,
      year_of_publish: post.created,
      author_name: fakerator.names.name(),
      edition: `V${fakerator.times(fakerator.random.number, 1, 1, 9)[0]}`,
      price: fakerator.times(fakerator.random.number, 1, 10, 200)[0],
      number_of_copies: fakerator.times(fakerator.random.number, 1, 10, 200)[0],
      availability: true,
      floor_no: fakerator.times(fakerator.random.number, 1, 1, 5)[0],
      section_name: fakerator.random.letter(),
      rack_no: fakerator.random.number(50),
    };
    await books_service.create_books_service(book);
    books.push(book);
  }

  res.json({ result: books });
};
