const express = require('express');
const router = express.Router();
const Message = require('../models/message');

// POST /api/message - create new message
router.post('/', async (req, res) => {
  try {
    const { fullname, email, message } = req.body;

    if (!fullname || !email || !message) {
      return res.status(400).json({ error: 'Fullname, email, and message are required.' });
    }

    const newMessage = new Message({ fullname, email, message });
    await newMessage.save();

    res.status(201).json({ message: 'Message saved successfully!' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'Failed to save message.' });
  }
});

// GET /api/message - get all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Failed to fetch messages.' });
  }
});

module.exports = router;
