const UsersService = require('../../services/users/index');
const check_user_exist = async (req, res, next) => {
   const users_service = new UsersService();
   try {
      const { email, phoneNo } = req.body;
      const user = await users_service.get_user_by_phone_email(email, phoneNo);
      if (user?.email === email) {
         res.error('', 'email already in user', 409);
      } else if (user?.phoneNo === phoneNo) {
         res.error('', 'phone Number already in user', 409);
      } else {
         next();
      }
   } catch (error) {

   }
}

module.exports = check_user_exist;