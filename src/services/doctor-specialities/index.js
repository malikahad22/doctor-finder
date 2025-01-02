const { doctor_specialities, doctors, specialities, users } = require('../../../models/index');
class DoctorSpecialityService {
   constructor() {
   }

   async create_doctor_specialities(data) {
      try {
         const response = await doctor_specialities.bulkCreate([data]);
         return response;
      } catch (error) {
         throw error;
      }
   }

   async getDoctorSpecialities(doctorId) {
      try {
         const doctorsWithSpecialities = await doctors.findAll({
            where: {
               id: doctorId
            },
            include: [
               {
                  model: specialities,
                  through: {
                     model: doctor_specialities,
                     attributes: []
                  },
                  as: 'specialities',
               },
               {
                  model: users,
                  attributes: { exclude: ['password'] },
                  as: 'doctor',
               }
            ],
            logging: false,
         });

         return doctorsWithSpecialities;
      } catch (error) {
         throw error;
      }
   }


}

module.exports = DoctorSpecialityService;