const express = require('express');
const passport = require('passport');

const UserController = require('../../controller/users/index');
const validate_payload = require('../../middlewares/user-validate/index');
const check_user_exist = require('../../middlewares/check-user-exist/index');
const check_user_by_id = require('../../middlewares/check-user-with-id/index');

const userRoutes = express.Router();

userRoutes.get('/user', passport.authenticate('jwt', { session: false }), UserController.get_users);
userRoutes.post('/user', validate_payload, check_user_exist, UserController.create_user);
userRoutes.delete('/user/:id', passport.authenticate('jwt', { session: false }), check_user_by_id, UserController.delete_user);
userRoutes.patch('/user', passport.authenticate('jwt', { session: false }), UserController.update_user);

module.exports = userRoutes;