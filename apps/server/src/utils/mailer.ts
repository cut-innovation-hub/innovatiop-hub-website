import * as nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ihub@cut.ac.zw',
    pass: 'ribi@2024Q!',
  },
});
