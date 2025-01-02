const UsersService = require('../../services/users/index');
const { hash_password } = require('../../utils');
class UserController {

   constructor() {
      this.users_service = new UsersService();
   }

   /**
    * 
    * @param {*} req 
    * @param {*} res 
    */
   get_users = async (req, res) => {
      try {
         const response = await this.users_service.get_users();
         res.success(response, 'users fetched successfully', 200);
      } catch (error) {
         res.error(error, 'something went wrong!', 500);

      }
   }

   create_user = async (req, res) => {
      try {
         const payload = req.body;
         const hash = await hash_password(payload.password);
         payload['password'] = hash;
         const response = await this.users_service.create_user(payload);
         res.success(response,
            'user created successfully!',
            201
         )

      } catch (error) {
         console.log('Error =>', error);
         res.error('',
            'something went wrong',
            500
         )
      }
   }

   delete_user = async (req, res) => {
      try {
         const { id } = req.params;
         await this.users_service.delete_user(id);
         res.success(null, 'user deleted successfully!', 200);

      } catch (error) {
         res.error('', 'something went wrong', 500);
      }
   }

   update_user = async (req, res) => {
      try {
         const { id, ...data } = req.body;
         const response = await this.users_service.update_user(id, data);
         res.success(response, 'user updated successfully', 200);
      } catch (error) {
         res.error(error, 'something went wrong', 500);
      }
   }
}


module.exports = new UserController();