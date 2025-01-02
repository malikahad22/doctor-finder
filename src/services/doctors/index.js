const { doctors, users } = require('../../../models/index');
class DoctorServices {
   constructor() { }

   async get_all_doctors() {
      try {
         const response = await doctors.findAll({
            include: [
               {
                  model: users,
                  as: 'doctor',
                  attributes: { exclude: ['doctorId', 'password', 'userRoleId'] },
                  where: {
                     isDeleted: false
                  }
               }
            ]
         });
         return response;
      } catch (error) {
         throw error;
      }
   }

   async get_doctor(id) {
      try {
         const response = await doctors.findOne({
            include: [
               {
                  model: users,
                  as: 'doctor',
                  attributes: { exclude: ['doctorId', 'password', 'userRoleId'] },
                  where: {
                     isDeleted: false
                  }
               }
            ],
            where: {
               id: id
            }
         });
         return response;
      } catch (error) {
         throw error;
      }
   }

   async update_doctor(id, data) {
      try {
         const response = await doctors.update(data, {
            where: {
               id: id
            }
         });
         return response;
      } catch (error) {
         throw error;
      }
   }
}

module.exports = DoctorServices;