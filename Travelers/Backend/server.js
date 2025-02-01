const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");




dotenv.config();

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());





require("dotenv").config();


const PORT = process.env.PORT || 5000;


// ✅ Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/tour-book", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Error connecting to MongoDB:", err));


mongoose.connection.on("open", () => console.log("📡 MongoDB Connection Successful!"));
mongoose.connection.on("error", (err) => console.error("⚠️ MongoDB Error:", err));

// ✅ Import Routes (import once)
const userRoutes = require("./routes/userRoutes");
const destinationRoutes = require("./routes/destinationRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

// ✅ Use Routes
app.use("/api/users", userRoutes); // Add user routes
app.use("/api/destinations", destinationRoutes); // Add destination routes
app.use("/api/bookings", bookingRoutes); // Add booking routes

// 🌍 Default API Route
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

// 🚀 Start Server
app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});
