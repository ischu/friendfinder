// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Displays all respondants' survey data
app.get("/api/respondants", function (req, res) {
    return res.json(respondants);
});

// Displays a single respondant, whose survey result is the closest match to user
app.get("/api/respondants/:match", function (req, res) {
    var match = req.params.match;
    // code to compare and match user with closest respondant
});