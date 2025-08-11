const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// Initialize app
const app = express();
const port = 4000;

// Middlewares
app.use(cors());
app.use(express.json()); // parse incoming JSON data
app.use(express.static(path.join(__dirname, "public"))); // serve static files

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/Blood-Doner-Finder", {
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

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
