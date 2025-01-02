const SpecialitiesService = require('../../services/specialities');
class SpecialitiesController {
   constructor() {
      this.specialitiesService = new SpecialitiesService();
   }

   createSpeciality = async (req, res) => {
      try {
         const data = req.body;
         console.log('data', data);
         const response = await this.specialitiesService.create_speciality(data);
         res.success(response, 'Speciality created successfully', 201);
      } catch (error) {
         res.error(error, 'Error creating speciality', 500);
      }
   }

   getSpecialities = async (req, res) => {
      try {
         const specialities = await this.specialitiesService.getSpecialities();
         res.success(specialities, 'Specialities fetched successfully', 200);

      } catch (error) {
         res.error(error, 'Error fetching specialities', 500);
      }
   }
}

module.exports = new SpecialitiesController();  