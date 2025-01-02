const express = require('express');
const SpecialitiesController = require('../../controller/specialities/index');
const router = express.Router();

router.get('/specialities', SpecialitiesController.getSpecialities);
router.post('/specialities', SpecialitiesController.createSpeciality);

module.exports = router;