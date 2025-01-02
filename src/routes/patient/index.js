const express = require('express');
const router = express.Router();

const Patient = require('../../controller/patient');

router.get('/patient', Patient.getPatients);
router.get('/patient/:id', Patient.getPatient);
router.patch('/patient', Patient.updatePatient);


module.exports = router;