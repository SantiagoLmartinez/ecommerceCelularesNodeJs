// const multer = require('multer');
// const multerConfig = require('../utils/multerConfig')

const { send } = require('express/lib/response')
const  Celular  = require('../models/celulares.schema')

// const upload = multer(multerConfig).single('image');
// exports.fileUpload = (req, res, next) =>{
//     upload(req, res, function(error){
//         if(error){
//             res.json({message: error});
//         }
//         return next();
//     })
// }

const leerCelulares = async (req, res) => {
    try {
        const celular = await  Celular.find().lean()
        res.render('celulares',{ celular })
    } catch (error) {
        console.log('error al leer Celulares', error)
        res.send('algo fallo')
    }
}
const leerCelularesCRUD = async (req, res) => {
    try {
        const celular = await  Celular.find().lean()
        res.render('formCelulares',{ celular })
    } catch (error) {
        console.log('error al leer mascotas', error)
        res.send('algo fallo')
    }
}

const agregarCelulares = async (req,res) =>{
    // console.log(req.body)
    const {
        marca,
        modelo,
        precio,
        urlImg,
        // descripcion:{pantalla,camara_frontal,ram}
    } = req.body
    try {
        // AGREGAR VALIDACIONES
                // descripcion:{pantalla,camara_frontal,ram}
        const celular = new Celular({
        marca,modelo,precio,urlImg
        })
        await celular.save()
        // console.log(mascota)
        res.redirect('/')
    } catch (error) {
        console.log('algo fallo', error)
    }
}

module.exports = {
    leerCelulares,
    leerCelularesCRUD,
    agregarCelulares,
}