const fs=require('fs')
const mongooose=require('mongoose')
const User=require('../models/User')
const path = require('path')

exports.upload=(req, res)=> {
    User.findOne({ email: req.body.email }).then((user) => {
        user["profilePic"]={
            data: fs.readFileSync(path.join(__dirname, '../' + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
        user.save()
        res.send(user);
    })
}