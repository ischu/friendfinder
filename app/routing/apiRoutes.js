// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// GET
// Displays all respondants' survey data
app.get("/api/respondants", function (req, res) {
    return res.json(respondants);
});

// Displays a single respondant, whose survey result is the closest match to user
app.get("/api/respondants/:match", function (req, res) {
    var match = req.params.match;
    // code to compare and match user with closest respondant
});

// POST
// Create New Characters - takes in JSON input
app.post("/api/respondants", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    var newRespondant = req.body;
  
    console.log(newRespondant);
  
    respondants.push(newRespondant);
  
    res.json(newRespondant);
  });