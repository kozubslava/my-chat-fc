const authRouter = require('express').Router();
const AuthController = require('../controllers/auth.controller');
const {validateRegistration, validateLogin} = require('../middlewares/user.mw')


authRouter.post('/registration',validateRegistration, AuthController.registration);
authRouter.post('/login', validateLogin,  AuthController.login);

module.exports = authRouter;