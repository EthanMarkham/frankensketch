var express = require("express");
var router = express.Router();
var startGame = require("./startGame");
var postGame = require("./postGame");
const getGames = require("./getGames");

// define the home page route
router.get("/", function (req, res) {
    res.json({ hi: "Birds home page" });
});

router.get("/rest/start", function (req, res) {
    startGame(req, res);
});

router.post("/rest/game", function (req, res) {
    postGame(req, res);
});

router.post("/rest/listGames", function (req, res) {
    getGames(req, res);
});

module.exports = router;
