const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  action: { type: String, required: true },
  details: { type: Object },
  status: { type: String, enum: ['success', 'error'], default: 'success' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Log", logSchema);