const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const path = require("path");
const mongoose = require('mongoose');
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://admin:admin1@ds261460.mlab.com:61460/heroku_20nf9px7";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

const PORT = process.env.PORT || 3001;

app.set("views", path.join(__dirname, "views"));

app.engine(
  "handlebars",
  hbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  res.render("home");
});

app.listen(PORT);
console.log("Listening port: " + PORT);