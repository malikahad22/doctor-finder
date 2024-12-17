const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
const transporter = nodemailer.createTransport({
   port: 587,
   host: "smtp.gmail.com",
   auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
   },
   secure: false,
});

module.exports = transporter;