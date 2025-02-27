const express = require('express');
const router = express.Router();
const control = require('../controllers/auth-controllers');
const signupSchema = require('../validators/auth-validators');
const loginSchema = require('../validators/auth-login');
const authMiddleware = require('../middlewares/auth-middleware')
const validate = require('../middlewares/validate-middleware')
const Port = 5000;

// This is the middleware to use the router

router.route('/') // This is a route
    .get(control.home) // This is a get request

router.route('/register') // This is a route
    .post(validate(signupSchema) , control.register) // This is a get request
    
router.route('/login') // This is a route
    .post(validate(loginSchema),control.login) // This is a get request

router.route('/user').get(authMiddleware, control.user)


module.exports = router; // Exporting the router to use in server.js