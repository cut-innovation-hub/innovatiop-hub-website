import mongoose from 'mongoose';

const topstorySchema = new mongoose.Schema(
  {
    news_id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Topstory = mongoose.model('Topstory', topstorySchema);
