const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const User = require('../models/User')

exports.login = (req, res) => {

    const { email, username, password, name } = req.body

    console.log('----------------',req.body)

    if(!email || !password || !name || !username) {
        res.json({ success: false, error: "Send needed params" })
        return
    }

    const user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(password, 10),
        name,
        username
    })


    user.save().then((user)=>{
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.SECRET_JWT_CODE,{ expiresIn: '1d' })
        res.json({ success: true, token: token })
    }).catch((err) => {
        res.json({ success: false, error: err })
    })

}