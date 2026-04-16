const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

// Initialize app
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json()); // parse incoming JSON data
app.use(express.static(path.join(__dirname, "public"))); // serve static files

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Import Routes
const authRoutes = require("./Routers/routes");
const formRoutes = require("./Routers/formRoutes"); // form submission route


// Use Routes
app.use("/", authRoutes);             // login/signup routes
app.use("/api", formRoutes);          // form submit at: /api/submit-form

const donorRoutes = require("./Routers/donorRoutes");  
app.use("/api", donorRoutes); // Now /api/submit-donor and /api/all-donors work


const requestBloodRoutes = require("./Routers/requestBloodRoutes");
app.use("/api", requestBloodRoutes); // Now /api/request-blood works

const contactRoutes = require("./Routers/contactRoutes");
app.use("/api", contactRoutes); // Now /api/contact works

// Notifications endpoint stub
app.get("/notifications-count", (req, res) => {
  res.json({ count: 0 });
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
