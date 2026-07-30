const express = require("express");

const router = express.Router();

const {
  addProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
  searchProperties,
} = require("../controllers/propertyController");

const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
// Add Property
router.post("/", protect, upload.single("image"), addProperty);

// Get All Properties
router.get("/", getAllProperties);

router.get("/search", searchProperties);

// Get Property By ID
router.get("/:id", getPropertyById);

// Update Property
router.put("/:id", protect, updateProperty);

// Delete Property
router.delete("/:id", protect, deleteProperty);

module.exports = router;
