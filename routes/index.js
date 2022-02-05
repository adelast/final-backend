var express = require("express");
var router = express.Router();

const sports = [
  { id: 1, name: "football" },
  { id: 2, name: "basketball" },
  { id: 3, name: "judo" },
];

const players = [
  { id: 1, name: "Habib" },
  { id: 2, name: "Mohammed Ali" },
  { id: 3, name: "Tyson" },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("welcome to express");
});

/* GET sports page. */
router.get("/sports", function (req, res, next) {
  res.send(sports);
});

/* GET players page. */
router.get("/players", function (req, res, next) {
  res.send(players);
});

module.exports = router;
