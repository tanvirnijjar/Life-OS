const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

// ==========================
// Middleware
// ==========================
app.use(cors());
app.use(express.json());

// 👇 Add this
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ==========================
// Home Route
// ==========================
app.get("/", (req, res) => {
  res.send("🚀 Welcome to Life OS Backend!");
});

// ==========================
// Test Route
// ==========================
app.get("/hello", (req, res) => {
  res.send("HELLO OFFICER 🚀");
});

// ==========================
// API Routes
// ==========================
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// ==========================
// 404 Route
// ==========================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

module.exports = app;