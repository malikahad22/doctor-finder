const express = require("express");
const userRoutes = require('./routes/users/index');
const authRoute = require('./routes/auth/index');
const patientRoutes = require('./routes/patient/index');
const doctorRoutes = require('./routes/doctors/index');
const specialitiesRoutes = require('./routes/specialities/index');
const specialitiesDoctorRoutes = require('./routes/doctor-specialities/index');
const passport = require('passport');
require('../config/passport')(passport);

const responseFormatter = require("./middlewares/response-formatter");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(responseFormatter);
app.use(passport.initialize());

app.use('/', userRoutes);
app.use('/', authRoute);
app.use('/', patientRoutes);
app.use('/', doctorRoutes);
app.use('/', specialitiesRoutes);
app.use('/', specialitiesDoctorRoutes);

module.exports = app;