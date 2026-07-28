const express = require("express");
const router = express.Router();

const {
  addFavourite,
  getFavourites,
  removeFavourite,
} = require("../controllers/favouriteController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, addFavourite);

router.get("/", protect, getFavourites);

router.delete("/:propertyId", protect, removeFavourite);

module.exports = router;
