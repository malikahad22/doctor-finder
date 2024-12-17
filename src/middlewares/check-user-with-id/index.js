const UsersService = require('../../services/users/index');
const check_user_by_id = async (req, res, next) => {
   try {
      const users_service = new UsersService();
      const { id } = req.params;
      const response = await users_service.get_user_by_id(id);
      if (!response || response.dataValues.isDeleted) {
         res.error(null, 'user does not exist', 400);
         return;
      }
      next();

   } catch (error) {
      res.error('', 'something went wrong!', 500);
   }
}

module.exports = check_user_by_id;