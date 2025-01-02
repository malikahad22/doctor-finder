const DoctorsController = require('../../controller/doctors/index');
const express = require('express');
const router = express.Router();

router.get('/doctors', DoctorsController.get_all_doctors);
router.get('/doctors/:id', DoctorsController.get_doctor);
router.patch('/doctors/:id', DoctorsController.update_doctor);

module.exports = router;
