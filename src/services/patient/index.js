const { patients } = require('../../../models');

class PatientService {
   constructor() { }

   async create_patient(data) {
      try {
         console.log("data", data);
         const response = await patients.create(data);
         console.log("response", response);
         return response;
      } catch (error) {
         throw error;
      }
   }
}

module.exports = PatientService;