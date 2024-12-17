const { email_validator } = require('../../utils/index');

const validate_payload = (req, res, next) => {
   const payload = req.body;

   // Extract fields
   const { email, phoneNo, firstName, lastName, password, date_of_birth } = payload;

   // Validate email
   if (!email || !email.trim()) {
      return res.error('', 'Email is required', 400);
   } else if (!email_validator(email)) {
      return res.error('', 'Invalid email', 400);
   }

   // Validate phone number
   if (!phoneNo || !phoneNo.trim()) {
      return res.error('', 'Phone number is required', 400);
   } else if (!/^[0-9]+$/.test(phoneNo)) {
      return res.error('', 'Phone number must contain only digits', 400);
   }

   // Validate first name
   if (!firstName || !firstName.trim()) {
      return res.error('', 'First name is required', 400);
   }

   // Validate last name
   if (!lastName || !lastName.trim()) {
      return res.error('', 'Last name is required', 400);
   }

   // Validate password
   if (!password || !password.trim()) {
      return res.error('', 'Password is required', 400);
   } else if (password.length < 8) {
      return res.error('', 'Password must be at least 8 characters long', 400);
   }

   // Validate date_of_birth (if provided)
   if (date_of_birth && isNaN(new Date(date_of_birth).getTime())) {
      return res.error('', 'Invalid date of birth format', 400);
   }

   // If all validations pass, proceed to the next middleware or route handler
   next();
};

module.exports = validate_payload;
