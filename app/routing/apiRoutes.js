// Dependencies
var path = require("path");

var respondants = [
    {
        name: "sampleName",
        photo: "sampleURL",
        answers: ["1", "2", "3", "4", "5"]
    }
]

module.exports = function (app) {
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
// Create New friend - takes in JSON input
app.post("/api/respondants", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    var newRespondant = req.body;

    console.log(newRespondant);

    respondants.push(newRespondant);

    res.json(newRespondant);
});
};