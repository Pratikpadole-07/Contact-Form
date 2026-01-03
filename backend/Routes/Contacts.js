const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Contact = require("../Models/Contact");
const validator = require("validator");

router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ name: 1 });
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name?.trim() || !email?.trim() || !phone?.trim()) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  if (!validator.isMobilePhone(phone, "any")) {
    return res.status(400).json({ error: "Invalid phone number" });
  }

  try {
    const contact = await Contact.create({ name, email, phone, message });
    res.status(201).json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.json({ message: "Contact deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
