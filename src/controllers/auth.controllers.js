const express = require('express');
const router = express.Router();

const  registerForm = (req,res) =>{
    res.render('loginAdmin')
}
const registerUser = async (req,res) =>{
    console.log(req.body)
    res.json(req.body)
}

const  loginForm = (req,res) =>{
    res.render('registroAdmin')
    
}

module.exports = {
    registerForm,
    loginForm,
    registerUser,
}
