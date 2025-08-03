const express = require("express");
const router = express.Router();
const Form = require("../Models/FormModel");

// POST: Submit form
router.post("/submit-form", async (req, res) => {
  try {
    const newForm = new Form(req.body);
    await newForm.save();
    res.status(200).json({ message: "Form submitted successfully" });
  } catch (err) {
    console.error("Form submission error:", err);
    res.status(500).json({ message: "Failed to submit form" });
  }
});

// ✅ GET: View all submitted form data
router.get("/all-requests", async (req, res) => {    //http://localhost:4000/api/all-requests
  try {
    const allData = await Form.find();
    res.status(200).json(allData);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ message: "Failed to fetch data" });
  }
});

module.exports = router;
