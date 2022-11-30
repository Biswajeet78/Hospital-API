const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const patient = require('../models/Patient');
const passport = require('passport');

//Creating route for patient Controller


router.post('/register',passport.authenticate('jwt', { session: false }),patientController.create)
router.get('/:id/all_reports', passport.authenticate('jwt', { session: false }), patientController.allReports);
router.post("/:id/create_report",passport.authenticate("jwt",{session:false}),patientController.createReport)

module.exports = router;