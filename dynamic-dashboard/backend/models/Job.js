const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  views: { type: Number, default: 0 },
  status: { type: String, enum: ["Applied", "Interviewing", "Rejected"] },
});

module.exports = mongoose.model("Job", jobSchema);
