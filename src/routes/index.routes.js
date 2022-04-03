const express = require('express')
const { leerMacostas, agregarMascotas } = require('../controllers/adopcion.controllers')
const router = express.Router()


router.get('/adopciones', leerMacostas)
router.post('/adopciones', agregarMascotas)

router.get('/formulario', (req,res)=>{
    res.render('formAdopciones')
})

router.get('/', (req,res)=>{
    res.render('home')
})

module.exports = router;