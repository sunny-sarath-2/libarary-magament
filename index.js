let express = require("express");
let app = express();
require("./model/database");
var jwt = require("jsonwebtoken");
var path = require("path");
const api = require("./routes/api.route");
var cors = require("cors");

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.static("public"));

app.use("/api", api);
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/public", "", "index.html"));
});
app.listen(3001, () => {
  console.log("running on 3001");
});
