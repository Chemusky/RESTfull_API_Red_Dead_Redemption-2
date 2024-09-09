const {
  addCharacter,
  getAllCharacters,
  getCharacterByID,
} = require("../controllers/characterControllers");
const router = require("express").Router();

// http://localhost:9000/characters
router.get("/", getAllCharacters);
router.get("/:id", getCharacterByID);
router.post("/add-character", addCharacter);

module.exports = router;
