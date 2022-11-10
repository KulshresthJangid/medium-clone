const express=require('express')
const multer=require('multer')
const router=express.Router()

const mediaController = require('../controllers/mediaController')

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb)=>{
        cb(null, file.fieldname + '-'+ Date.now())
    }
})

var upload = multer({ storage: storage })

router.post('/uploadProfilePic', upload.single('profilePic'), mediaController.upload)

module.exports=router