const Contact = require("../models/Contact");

// Send Message
const sendMessage = async (req, res) => {
  try {
    const { propertyId, message } = req.body;

    const contact = await Contact.create({
      property: propertyId,
      sender: req.user._id,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Messages
const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find()
      .populate("sender", "name email phone")
      .populate("property", "title location");

    res.status(200).json({
      success: true,
      count: messages.length,
      messages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  sendMessage,
  getMessages,
};
