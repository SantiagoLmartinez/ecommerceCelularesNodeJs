const { type } = require('express/lib/response')
const mongoose = require('mongoose')
const {Schema} = mongoose

celularSchema = new Schema({
    marca: {
        type: String,
        required: true,
        trim: true,
    },
    modelo: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    urlImg: {
        type: String,
    },
    // descripcion:{
    //     pantalla:{type: String}, 
    //     camara_frontal:{type: String},
    //     ram: {type: Number}
    // }
})

// celularSchema.methods.setImgUrl = function setImgUrl (){
// }

const celular = mongoose.model('celular', celularSchema)
module.exports = celular