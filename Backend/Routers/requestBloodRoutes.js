const express = require("express");
const router = express.Router();
const RequestBlood = require("../Models/RequestBlood");

// POST /api/request-blood
router.post("/request-blood", async (req, res) => {
  try {
    const newRequest = new RequestBlood(req.body);
    await newRequest.save();
    res.status(200).json({ message: "Blood request submitted successfully" });
  } catch (err) {
    console.error("Error submitting request:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
