const email_template = require('../../nodemailer/email-template');
const AuthService = require('../../services/auth/index');
const SharedService = require('../../services/shared/index');
const UsersService = require('../../services/users/index');

const {
   compare_hash_password,
   generate_jwt,
   generate_otp,
   generate_expiry_time,
   current_time,
   hash_password } = require('../../utils');
class AuthController {

   constructor() {
      this.auth = new AuthService();
      this.shared = new SharedService();
      this.user = new UsersService();
   }

   login = async (req, res) => {
      try {
         const { email, password } = req.body;
         const user = await this.auth.login_user(email);

         if (!user) {
            res.error(null, 'user not found!', 404);
            return;
         };

         // const isValidPassword = await compare_hash_password(password, user.password);
         // if (!isValidPassword) {
         //    res.error(null, 'incorrect password!', 401);
         //    return;
         // }

         const token = generate_jwt(user);


         delete user['dataValues'].password;
         res.success(token, 'user fetched successfully', 200);

      } catch (error) {
         res.error(error, 'something went wrong!');
      }
   }

   forget_password = (req, res) => {
      try {



      } catch (error) {
         res.error('', 'something went wrong!', 500);
      }
   }

   send_opt = async (req, res) => {
      try {

         const { email } = req.body;
         const otp = generate_otp();
         const expiry_time = generate_expiry_time();
         const template = email_template(otp);
         const response = await this.shared.send_email(email, template, 'OTP to Reset Password', '');

         if (!response) {
            res.error('', 'Email not sent!', 400);
            return;
         }

         console.log("{ otp: otp, expiryTime: expiry_time }", { otp: otp, expiryTime: expiry_time })
         const resp = await this.user.update_user({ otp: otp, expiryTime: expiry_time }, null, email);
         console.log("res", resp);
         res.success(resp, 'Email sent successfully!', 200);

      } catch (error) {
         console.log("error", error);
         res.error('', 'something went wrong!', 500);
      }
   }

   compare_otp = async (req, res) => {

      try {

         const { email, otp } = req.body;
         const { dataValues } = await this.user.get_user_by_id(null, email);
         const expiry_time = current_time();

         if (dataValues.otp != otp) {
            res.error('', 'OTP Invalid', 400);
            return;
         }

         if (expiry_time > dataValues.expiryTime) {
            res.error('', 'OTP Expired', 400);
            return;
         }
         res.success(null, 'OTP Verified', 200);
      } catch (err) {
         res.error('', 'something went wrong!', 500);
      }
   }

   reset_password = async (req, res) => {
      try {

         const { email, password } = req.body;
         const hashed_password = await hash_password(password);

         const response = await this.user.update_user({ password: hashed_password }, null, email);
         res.success(response, 'Password reset successfully!', 200);
      } catch (err) {
         res.error('', 'something went wrong!', 500);
      }
   }




}

module.exports = new AuthController();