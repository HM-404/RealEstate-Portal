const Favourite = require("../models/Favourite");

// Add Favourite
const addFavourite = async (req, res) => {
  try {
    const favourite = await Favourite.create({
      user: req.user._id,
      property: req.body.propertyId,
    });

    res.status(201).json({
      success: true,
      message: "Property added to favourites",
      favourite,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Property already in favourites",
      });
    }

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get User Favourites
const getFavourites = async (req, res) => {
  try {
    const favourites = await Favourite.find({
      user: req.user._id,
    }).populate("property");

    res.status(200).json({
      success: true,
      count: favourites.length,
      favourites,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Remove Favourite
const removeFavourite = async (req, res) => {
  try {
    const favourite = await Favourite.findOneAndDelete({
      user: req.user._id,
      property: req.params.propertyId,
    });

    if (!favourite) {
      return res.status(404).json({
        success: false,
        message: "Favourite not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Favourite removed",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addFavourite,
  getFavourites,
  removeFavourite,
};
