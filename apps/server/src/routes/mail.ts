/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import express from 'express';
import { Mail } from '../models/Mail';
const router = express.Router();

// create a mail
// post request
// /api/mail/post
router.post('/create', async (req, res, next) => {
  try {
    const { name, phone, email, desc } = req.body;

    if (!name) {
      return res.status(400).send({ message: 'Please enter your name' });
    } else if (!phone) {
      return res
        .status(400)
        .send({ message: 'Please enter your phone number' });
    } else if (!desc) {
      return res.status(400).send({ message: 'Please description your idea' });
    } else {
      const newMail = new Mail({
        name,
        phone,
        description: desc,
        email,
      });
      const saved_mail = await newMail.save();

      return res
        .status(200)
        .send({ message: 'Mail saved successfully', mail: saved_mail });
    }
  } catch (error) {
    next(error);
  }
});

export default router;
