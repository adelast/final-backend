var express = require("express");
var router = express.Router();

const sports = [
  { id: 1, name: "football" },
  { id: 2, name: "basketball" },
  { id: 3, name: "judo" },
];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("welcome to express");
});

/* GET home page. */
router.get("/sports", function (req, res, next) {
  res.send(sports);
});

module.exports = router;
