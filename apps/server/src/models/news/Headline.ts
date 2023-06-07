import mongoose from 'mongoose';

const headineSchema = new mongoose.Schema(
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

export const Headline = mongoose.model('Headline', headineSchema);
