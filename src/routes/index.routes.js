const express = require('express')
const { 
        leerCelulares,
        agregarCelulares,
        leerCelularesCRUD,
        eliminarCelularCRUD, 
        editarCelularCRUDform,
        editarCelularCRUD} = require('../controllers/celulares.controllers')
const router = express.Router()


router.get('/celulares', leerCelulares)

router.post('/celCrud', agregarCelulares)

router.get('/celCrud',  leerCelularesCRUD)

router.get('/celCrud/eliminar/:id',  eliminarCelularCRUD)

router.get('/celCrud/editar/:id',  editarCelularCRUDform)
router.post('/celCrud/editar/:id',  editarCelularCRUD)


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