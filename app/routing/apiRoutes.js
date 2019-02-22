// Dependencies
var path = require("path");

var friendsArray = [
    {
        name: "sampleName",
        photo: "sampleURL",
        survey: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
    },
    {
        name: "sampleName2",
        photo: "sampleURL2",
        survey: ["2", "2", "2", "2", "2", "2", "2", "2", "2", "2"]
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
        for (var i = 0; i < friendsArray.length; i++) {
            if (match === friendsArray[i].name) {
                return res.json(friendsArray[i]);
            }
        };

        return res.json(false);
    });

    // POST
    // Create New friend - takes in JSON input from survey page
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        var newFriend = req.body;

        // checks to make sure there is at least one other friend to be matched with
        if (friendsArray.length > 1) {
            // function to compare survey results 
            function compare(arr1, arr2) {
                let diffArr = [];
                // loop through all ten answers
                for (i = 0; i < 10; i++) {

                    // subtract each number from its matching index number in other array
                    let diff = arr1[i] - arr2[i];

                    // add absolute vaule of difference between answers to array
                    diffArr.push(Math.abs(diff));

                }
                // reduces array of differences to a total
                let diffTotal = diffArr.reduce(function (total, num) {
                    return total + num;
                });
                return diffTotal;
            };
            // while loop to find closest match
            let j = 0;
            // highest possible difference in scores is 40, so closestMatch is set higher as baseline
            let closestMatch = 50;
            let matchName = null;
            while (j < friendsArray.length) {
                // total difference in scores
                let compareMatch = compare(friendsArray[j].survey, newFriend.survey);
                if (compareMatch < closestMatch) {
                    // set compared friend as new match
                    closestMatch = compareMatch;
                    // set matchName to closest match's name
                    matchName = friendsArray[j].name;
                }
                j++;
            };
            // push after performing match check, to prevent user from becoming own best friend
            friendsArray.push(newFriend);
            // response is name of match
            res.json(matchName);
        } else {
            res.json(false);
        };
    });
};