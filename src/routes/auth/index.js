const express = require('express');
const AuthController = require('../../controller/auth/index');
const authRoute = express.Router();

authRoute.post('/login', AuthController.login);
authRoute.put('/send-otp', AuthController.send_opt);
authRoute.post('/compare-otp', AuthController.compare_otp);
authRoute.post('/reset-password', AuthController.reset_password);

module.exports = authRoute;