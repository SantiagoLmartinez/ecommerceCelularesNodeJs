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
        console.log('error al leer Celulares', error)
        res.send('algo fallo')
    }
}
const editarCelularCRUDform = async (req,res) =>{
    const { id } = req.params
    // console.log(req.params)
    try {
        const celular = await Celular.findById(id).lean()
        console.log(celular) 
        res.render('formCelulares', { celular })
        // res.redirect('/celCrud')
    } catch (error) {

        console.log('algo fallo al editar',error)
    }
}
const editarCelularCRUD = async (req,res) =>{
    const { id } = req.params
    const {marca,modelo,precio,urlImg} = req.body
    // console.log(req.params)
    try {
        const celular = await Celular.findByIdAndUpdate(id,{marca,modelo,precio,urlImg})
        console.log(celular) 
        // res.render('formCelulares', { celular })
        res.redirect('/celCrud')
    } catch (error) {

        console.log('algo fallo al editar',error)
    }
}
const eliminarCelularCRUD = async (req, res) =>{
    const { id } = req.params
    console.log(req.params)
    try {
        await Celular.findByIdAndDelete( id ) 
        // await Celular.findOneAndDelete(id)

        res.redirect('/celCrud')
    } catch (error) {
        console.log('algo fallo al eliminar',error)
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
        res.redirect('/celCrud')
    } catch (error) {
        console.log('algo fallo', error)
    }
}

module.exports = {
    leerCelulares,
    leerCelularesCRUD,
    eliminarCelularCRUD,
    agregarCelulares,
    editarCelularCRUDform,
    editarCelularCRUD,
}