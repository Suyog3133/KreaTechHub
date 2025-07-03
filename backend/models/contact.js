const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  reason: { type: String },
   budget: {
    min: { type: Number },
    max: { type: Number }
  },
  message: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
