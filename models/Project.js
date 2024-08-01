const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  githubLink: { type: String, required: true },
  thumbnail: { type: String, required: true },
  liveLink: { type: String },
  techStack: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Project', projectSchema);
