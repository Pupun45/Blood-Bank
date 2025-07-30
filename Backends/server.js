const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 4000;

app.use(cors());
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb://127.0.0.1:27017/LOGIN-SIGNUP", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log("MongoDB connected")
})
.catch(err => console.error("MongoDB connection error:", err));

const authRoutes = require("./Routers/routes");
app.use("/", authRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
