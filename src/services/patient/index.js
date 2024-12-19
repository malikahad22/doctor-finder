const { patients } = require('../../../models');

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
}

module.exports = PatientService;