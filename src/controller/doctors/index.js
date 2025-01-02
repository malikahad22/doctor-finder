const DoctorService = require('../../services/doctors');
class DoctorsController {
   constructor() {
      this.doctorService = new DoctorService();
   }

   get_all_doctors = async (req, res) => {
      try {
         const response = await this.doctorService.get_all_doctors();
         console.log('response', response);
         res.success(response, 'Doctors fetched successfully', 200);
      } catch (error) {
         res.error(error, 'Error fetching doctors', 500);
      }
   }

   get_doctor = async (req, res) => {
      try {
         const { id } = req.params;
         const response = await this.doctorService.get_doctor(id);
         res.success(response, 'Doctor fetched successfully', 200);
      } catch (error) {
         res.error(error, 'Error fetching doctor', 500);
      }
   }

   update_doctor = async (req, res) => {
      try {
         const data = req.body;
         const { id, ...payload } = data;
         const response = await this.doctorService.update_doctor(id, payload);
         res.success(response, 'Doctor updated successfully', 200);
      } catch (error) {
         res.error(error, 'Error updating doctor', 500);
      }
   }
}

module.exports = new DoctorsController();