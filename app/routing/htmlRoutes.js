// Dependencies
var path = require("path");
// exports routes to server
module.exports = function (app) {// route to homepage
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
  });
  // route to survey page
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
  });
};