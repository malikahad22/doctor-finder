const { Op, where } = require('sequelize');
const { users, userRoles } = require('../../../models');
class UsersService {

   constructor() { }

   get_users = async () => {
      const response = await users.findAll({
         where: {
            isDeleted: false
         },
         include: { model: userRoles },
         attributes: {
            exclude: ['userRoleId', 'password']
         }
      });
      return response;
   }

   get_user_by_phone_email = async (email, phoneNo) => {
      try {
         const user = await users.findOne({
            where: {
               [Op.or]: [{ email: email }, { phoneNo: phoneNo }]
            }
         });
         return user;
      } catch (error) {
         throw error;
      }
   }

   get_user_by_id = async (id, email) => {
      try {
         const objQuery = id ? { id: id } : { email: email }
         const result = await users.findOne({
            where: objQuery
         });
         return result;
      } catch (error) {
         throw error;
      }
   }

   create_user = async (data) => {
      try {
         const response = await users.create(data);
         return response;
      } catch (error) {
         throw error;
      }
   }

   delete_user = async (id) => {
      try {
         const result = await users.update({ isDeleted: true }, {
            where: { id: id },
         });

         console.log("result", result);
         return result;

      } catch (error) {
         throw error;
      }
   }

   update_user = async (data, id = null, em = null) => {
      try {

         const queryObj = id ? { id: id } : { email: em };
         const result = await users.update(data, {
            where: queryObj
         });
         return result;

      } catch (error) {
         throw error;
      }
   }


}

module.exports = UsersService;