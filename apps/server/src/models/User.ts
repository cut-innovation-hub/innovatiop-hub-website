import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    role:{
        type: String,
        default: 'user'
    },
    approved:{
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model('User', userSchema);
