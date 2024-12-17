const { Op } = require("sequelize");
const { users, userRoles } = require("../../../models");
const email_template = require("../../nodemailer/email-template");

class AuthService {
   constructor() { }

   login_user = async (email) => {
      try {

         const user = await users.findOne({
            where: {
               [Op.and]: [{
                  email: email,
                  isDeleted: false
               }]
            },
            attributes: {
               exclude: ["userRoleId"],
            },
            include: { model: userRoles }
         });
         return user;

      } catch (error) {
         throw error;
      }
   }
}

module.exports = AuthService;