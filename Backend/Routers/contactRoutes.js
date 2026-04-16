const express = require("express");
const router = express.Router();
const Contact = require("../Models/contactHelp");

// POST /api/contact
router.post("/contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(200).json({ message: "Message received successfully" });
  } catch (err) {
    console.error("Error saving contact form:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
