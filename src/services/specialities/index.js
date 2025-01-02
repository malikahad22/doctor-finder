const { specialities } = require('../../../models/index');

class SpecialitiesService {
   constructor() {
   }

   async create_speciality(data) {
      try {
         const response = await specialities.create(data);
         return response;
      } catch (error) {
         throw error;
      }
   }

   async getSpecialities() {
      try {
         return await specialities.findAll();
      } catch (error) {
         throw error;
      }
   }
}

module.exports = SpecialitiesService;