// Dependencies
var path = require("path");

var friendsArray = [
    {
        name: "sampleName",
        photo: "sampleURL",
        survey: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
    }
]

module.exports = function (app) {
// GET
// Displays all survey data
app.get("/api/friends", function (req, res) {
    return res.json(friendsArray);
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
    // checks to make sure there is at least one other friend to be matched with
    friendsArray.push(newFriend);
    if(friendsArray.length>1)
    {
        res.json(true);
    }else{
        res.json(false);
    };
});
};