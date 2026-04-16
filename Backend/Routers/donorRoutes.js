const express = require("express");
const router = express.Router();
const Doner = require("../Models/DonorModel");


// Submit donor data
router.post("/submit-donor", async (req, res) => {
  try {
    const newDonor = new Doner(req.body);
    await newDonor.save();
    res.status(200).json({ message: "Donor form submitted successfully" });
  } catch (err) {
    console.error("Donor submission error:", err);
    res.status(500).json({ message: "Failed to submit donor form" });
  }
});

// Get all donors
router.get("/all-donors", async (req, res) => {
  try {
    const donors = await Doner.find();
    res.status(200).json(donors);
  } catch (err) {
    console.error("Fetch donor error:", err);
    res.status(500).json({ message: "Failed to fetch donors" });
  }
});

module.exports = router;
