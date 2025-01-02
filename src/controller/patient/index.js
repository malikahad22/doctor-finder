const PatientService = require('../../services/patient');
class Patient {

   constructor() {
      this.patient = new PatientService();
   }

   getPatients = async (req, resp) => {
      try {
         const patients = await this.patient.get_patients();
         resp.success(patients, 'Patient fetched successfully!', 200);
      } catch (error) {
         console.log("Error ", error);
         resp.error('', 'Something went wrong!', 500);
      }
   }

   getPatient = async (req, resp) => {
      try {
         const { id } = req.params;
         const patient = await this.patient.get_patient(id);
         resp.success(patient, 'Patient fetched successfully!', 200);
      } catch (error) {
         console.log("Error ", error);
         resp.error('', 'Something went wrong!', 500);
      }
   }

   updatePatient = async (req, resp) => {
      try {
         const data = req.body;
         const response = await this.patient.update_patient(data);
         resp.success(response, 'Patient updated successfully!', 200);
      } catch (error) {
         console.log("Error ", error);
         resp.error('', 'Something went wrong!', 500);
      }
   }

}

module.exports = new Patient();