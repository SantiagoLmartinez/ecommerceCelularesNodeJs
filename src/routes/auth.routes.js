const express = require('express');
const { registerForm, loginForm, registerUser } = require('../controllers/auth.controllers');
const router = express.Router();

router.get('/login', loginForm)
router.get('/register', registerForm)
router.post('/register', registerUser)
 


module.exports = router;