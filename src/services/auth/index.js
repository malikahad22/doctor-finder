const { Op } = require("sequelize");
const { users, userRoles, patients, doctors } = require("../../../models");
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
            include: [
               { model: userRoles, as: 'role' },
               { model: patients, as: 'patient' },
               { model: doctors, as: 'doctor' }
            ],
         });
         return user;

      } catch (error) {
         throw error;
      }
   }

}

module.exports = AuthService;