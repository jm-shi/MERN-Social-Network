const mongoose = require('mongoose');

const { Schema } = mongoose;

const PostSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  authorId: {
    type: String,
    required: true
  },
  avatarColor: {
    type: Number,
    required: true
  },
  likers: {
    type: [
      {
        name: String,
        _id: String
      }
    ],
    required: true
  },
  likesCount: {
    type: Number,
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
