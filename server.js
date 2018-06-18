const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const path = require("path");

const PORT = process.env.PORT || 3001;

app.set("views", path.join(__dirname, "views"));

app.engine(
  "handlebars",
  hbs({
    defaultLayout: "main"
    // layoutsDir: path.join(__dirname, 'public/views/layouts'),
  })
);
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  res.render("home");
});

app.listen(PORT);
console.log("Listening port: " + PORT);