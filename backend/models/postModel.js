const mongoose = require('mongoose');

const { Schema } = mongoose;

const PostSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  text: {
    type: String,
    trim: true,
    required: true
  },
  timestamp: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Post', PostSchema);
