const express = require('express')
const { leerCelulares, agregarCelulares,leerCelularesCRUD } = require('../controllers/celulares.controllers')
const router = express.Router()


router.get('/celulares', leerCelulares)

router.post('/celCrud', agregarCelulares)

router.get('/celCrud',  leerCelularesCRUD)

// (req,res)=>{
//     res.render('formCelulares')
// }
router.get('/FAQ', (req,res)=>{
    res.render('FAQ')
})
router.get('/contacto', (req,res)=>{
    res.render('contacto')
})

router.get('/', (req,res)=>{
    res.render('home')
})

module.exports = router;