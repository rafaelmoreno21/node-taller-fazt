const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/page.html");
});

app.get("/about", (req, res) => {
  res.send("about");
});
app.get("/skills", (req, res) => {
  res.send("skills");
});

app.listen(process.env.PORT || 3000);