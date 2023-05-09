import mongoose from 'mongoose';

const faqSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    solution: {
      type: String,
      required: true,
    },
    creator: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Faq = mongoose.model('Faq', faqSchema);
