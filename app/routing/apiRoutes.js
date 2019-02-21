// Dependencies
var path = require("path");

var friends = [
    {
        name: "sampleName",
        photo: "sampleURL",
        answers: ["1", "2", "3", "4", "5"]
    }
]

module.exports = function (app) {
// GET
// Displays all friends' survey data
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

// Displays a single friend, whose survey result is the closest match to user
app.get("/api/friends/:match", function (req, res) {
    var match = req.params.match;
    // code to compare and match user with closest friend
});

// POST
// Create New friend - takes in JSON input
app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    var newFriend = req.body;

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);
});
};