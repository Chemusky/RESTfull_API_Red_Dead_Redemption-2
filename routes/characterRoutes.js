const { addCharacter } = require("../controllers/characterControllers");
const router = require("express").Router();

// http://localhost:9000/characters
router.post("/add-character", addCharacter);

module.exports = router;
