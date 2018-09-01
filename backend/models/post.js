import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
  text: {
    type: String,
    required: true
  }
});

export default mongoose.model('Post', PostSchema);
