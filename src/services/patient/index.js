const { patients, users } = require('../../../models/index');

class PatientService {
   constructor() { }

   async create_patient(data) {
      try {
         const response = await patients.create(data);
         return response;
      } catch (error) {
         throw error;
      }
   }

   async get_patients() {
      try {
         const response = await patients.findAll({
            include: [
               {
                  model: users,
                  as: 'patient',
                  attributes: { exclude: ['patientId', 'password', 'userRoleId'] },
                  where: { isDeleted: false }
               },

            ]
         });
         return response;
      } catch (error) {
         throw error;
      }
   }

   async get_patient(id) {
      try {
         const response = await patients.findOne({
            include: [
               {
                  model: users,
                  as: 'patient',
                  attributes: { exclude: ['patientId', 'password', 'userRoleId'] },
                  where: { isDeleted: false }
               },
            ],
            where: { id: id }
         });
         return response;
      } catch (error) {
         throw error;
      }
   }

   async update_patient(data) {
      try {
         const { id, ...payload } = data;
         const response = await patients.update(payload, { where: { id: id } });
         return response;
      } catch (error) {
         throw error;
      }
   }
}

module.exports = PatientService;