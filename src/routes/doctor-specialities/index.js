const DoctorSpecialitiesController = require('../../controller/doctor-specialities/index');
const express = require('express');
const router = express.Router();

router.post('/create', DoctorSpecialitiesController.create_doctor_speciality);
router.get('/getDoctorSpecialities/:id', DoctorSpecialitiesController.get_doctor_specialities);

module.exports = router;