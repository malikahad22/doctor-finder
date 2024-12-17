const transporter = require('../../nodemailer/config');
class SharedService {
   constructor() { }

   send_email = async (email, template, subject, text = '') => {
      try {
         const mailData = {
            from: process.env.EMAIL,
            to: email,
            subject: subject,
            text: text,
            html: template
         };

         const response = await transporter.sendMail(mailData);
         return response;
      } catch (error) {
         throw error;
      }
   }
}

module.exports = SharedService;