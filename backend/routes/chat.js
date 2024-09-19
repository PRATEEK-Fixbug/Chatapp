const express = require('express');
const Chat = require('../models/Chat');
const User = require('../models/User');

const router = express.Router();

router.post('/send', async (req, res) => {
  const { sender, receiver, message } = req.body;
  const newChat = new Chat({ sender, receiver, message });
  await newChat.save();
  res.status(200).json(newChat);
});

router.get('/:username', async (req, res) => {
  const { username } = req.params;
  const user = await User.findOne({ username });
  if (!user) return res.status(404).json({ error: 'User not found' });
  const chats = await Chat.find({ $or: [{ sender: user._id }, { receiver: user._id }] }).populate('sender receiver');
  res.status(200).json(chats);
});

module.exports = router;
