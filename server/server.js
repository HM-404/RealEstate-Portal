const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");





const propertyRoutes = require("./routes/propertyRoutes");
const userRoutes = require("./routes/userRoutes");
// Load environment variables
dotenv.config();
connectDB();
// Create Express application
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/properties", propertyRoutes);





// Test Route
app.get("/", (req, res) => {
  res.send("Real Estate Portal Backend Running...");
});

// Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
