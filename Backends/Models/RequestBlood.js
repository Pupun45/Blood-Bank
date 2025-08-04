const mongoose = require("mongoose");

const requestBloodSchema = new mongoose.Schema({
  name: String,
  adhara: String,
  email: String,
  phone: String,
  bloodGroup: String,
  unit: String,
  gender: String,
  address: String,
});

module.exports = mongoose.model("RequestBlood", requestBloodSchema); // This creates the 'requestblood' collection
