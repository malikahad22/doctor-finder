const DoctorSpecialityService = require('../../services/doctor-specialities/index');
class DoctorSpecialitiesController {
   constructor() {
      this.doctorSpecialityService = new DoctorSpecialityService();
   }

   create_doctor_speciality = async (req, res) => {
      try {
         const payload = req.body;
         const response = await this.doctorSpecialityService.create_doctor_specialities(payload);
         res.success(response, 'Doctor speciality created successfully', 201);
      } catch (error) {
         res.error(error, 'Error creating doctor speciality', 500);
      }
   }

   get_doctor_specialities = async (req, res) => {
      try {
         const { id } = req.params;
         const response = await this.doctorSpecialityService.getDoctorSpecialities(id);
         res.success(response, 'Doctor specialities fetched successfully', 200);
      } catch (error) {
         res.error(error, 'Error fetching doctor specialities', 500);
      }
   }
}

module.exports = new DoctorSpecialitiesController();