var express = require("express");
const { getAllCharacters, index, result } = require("../../controllers/api/mbti");
var router = express.Router();

/* GET home page. */
router.get("/", index);
router.get("/characters", getAllCharacters);
router.post("/result", result);

module.exports = router;
