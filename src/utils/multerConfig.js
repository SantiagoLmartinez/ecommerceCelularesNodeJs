const multer = require ('multer')
const shotid = require ('shortid')

const multerConfig = {
    Storage: fileStorage = multer.diskStorage({
        destination: (req, file, cb) =>{
            cb(null, __dirname + '../../uploads/');
        },
        filename: (req, file, cb) =>{
            const extension = file.mimetype.split('/')[1];
            cd(null, `${shortid.generate()}.${extension}`)
        }
    }),
    fileFilter(req,file,cb){
        if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
            cb(null, true);
        } else{
            cb(new Error('Formato de imagen no valido'))
        }
    },
}
module.exports = multerConfig;