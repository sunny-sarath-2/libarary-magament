let mongoose = require("mongoose");
// const server = "127.0.0.1:27017";
const server = "sunny:123@cluster0.u57lf.mongodb.net";

// mongodb+srv://sunny:<password>@cluster0.u57lf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const DatabaseName = "librabry-managmnet";
// const uri = `mongodb://${server}/${DatabaseName}`;
const uri = `mongodb+srv://${server}/${DatabaseName}?retryWrites=true&w=majority`;
class Database {
  constructor() {
    mongoose
      .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log("connected");
      })
      .catch((err) => {
        console.log("error" + err);
      });
  }
}
module.exports = new Database();
