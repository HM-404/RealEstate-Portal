const express = require("express");

const router = express.Router();

const {
  addProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
} = require("../controllers/propertyController");

const { protect } = require("../middleware/authMiddleware");
// Add Property
router.post("/",protect, addProperty);

// Get All Properties
router.get("/", getAllProperties);

// Get Property By ID
router.get("/:id", getPropertyById);

// Update Property
router.put("/:id", protect,updateProperty);

// Delete Property
router.delete("/:id",protect, deleteProperty);

module.exports = router;
