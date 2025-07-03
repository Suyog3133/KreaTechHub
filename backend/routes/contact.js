const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { fullname, email, reason,budget , message } = req.body;
    const newContact = new Contact({ fullname, email, reason, budget, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact message saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save contact message.' });
  }
});

// GET /api/contact - get all contact messages
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }); // latest first
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Failed to fetch contacts.' });
  }
});

module.exports = router;
