const { doctors } = require('../../../models/index');
class DoctorService {
   constructor() { }

   async create_doctor(data) {
      try {

         const response = await doctors.create(data);
         console.log("create doctor", response);
         return response;

      } catch (error) {
         throw error;
      }
   }
}

module.exports = DoctorService;