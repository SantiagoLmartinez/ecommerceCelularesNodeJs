const { send } = require('express/lib/response')
const  Mascota  = require('../models/mascota.schema')

const leerMacostas = async (req, res) => {
    try {
       const mascota = await  Mascota.find().lean()
       res.render('adopciones',{ mascota })
    } catch (error) {
        console.log('error al leer mascotas', error)
        res.send('algo fallo')
    }
}

const agregarMascotas = async (req,res) =>{
    // console.log(req.body)
    const {
        nombre,tipo_animal,edad,cond_medica_descripcion,
        mail,comentarios,localidad,duenio_nombre,
        castrado,telefonoDeContacto,zona} = req.body
    try {
        // AGREGAR VALIDACIONES
        const mascota = new Mascota({
            nombre: nombre,
            tipo_animal: tipo_animal,
            edad: edad,
            // castrado: castrado,
            // telefonoDeContacto: telefonoDeContacto,
            // zona: zona
            cond_medica_descripcion: cond_medica_descripcion,
            duenio_nombre:duenio_nombre,
            localidad: localidad,
            comentarios:comentarios,
            mail: mail,

        })
        await mascota.save()
        // console.log(mascota)
        res.redirect('/')
    } catch (error) {
        console.log('algo fallo', error)
    }
}

module.exports = {
    leerMacostas,
    agregarMascotas
}