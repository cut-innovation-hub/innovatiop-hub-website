import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
    },
    sub_heading: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    main_pic: {
      type: String,
    },
    gallery: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

export const News = mongoose.model('News', newsSchema);
