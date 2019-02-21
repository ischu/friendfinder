// Dependencies
var express = require("express");

// Configure express SERVER
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
