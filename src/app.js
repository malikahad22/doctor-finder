const express = require("express");
const userRoutes = require('./routes/users/index');
const authRoute = require('./routes/auth/index');
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


module.exports = app;