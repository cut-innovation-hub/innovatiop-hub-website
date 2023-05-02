import mongoose from 'mongoose';

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    nature_of_products: {
      type: Array,
    },
    location: {
      type: String,
    },
    gallery: {
      type: Array,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Company = mongoose.model('Company', companySchema);
