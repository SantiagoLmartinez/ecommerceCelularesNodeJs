const { type } = require('express/lib/response')
const mongoose = require('mongoose')
const {Schema} = mongoose

// const mascotaSchema = new Schema(
//     {
//         nombre: {
//             type: String,
//             required: true,
//         },
//         especie:{
//             type: String,
//             required: true,
//         },
//         zona:{
//             type: String,
//             required: true,
//         },
//         edad:{
//             type: Number,
//             required: true,
//         },
//         castrado:{
//             type: String,
//             required: true,
//         },
//         telefonoDeContacto:{
//             type: Number,
//             required: true,
//         }
//     }
// )
const mascotaSchema = new Schema(
    {
        nombre:{type: String,required: true},
        tipo_animal:{type: String,required: true},
        edad:{type: Number},
        // dma,
        // sexo:{},
        // mh,
        // es_castrado:{},
        // no_sesino,
        // cond_medica:{},
        // nose_sino,
        cond_medica_descripcion:{type: String,required: true},
        // imagen:{},
        duenio_nombre:{type: String,required: true},
        mail:{type: String,required: true},
        localidad:{type: String,required: true},
        comentarios:{type: String,required: true}

}
)

const mascota = mongoose.model('mascota', mascotaSchema)
module.exports = mascota