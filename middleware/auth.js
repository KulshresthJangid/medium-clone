const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const User = require('../models/User')

const config = process.env

const verifyToken = (req, res, next)=> {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];

    if(!token) {
        return res.status(403).send("Token is required")
    }
    try{
        const decoded = jwt.verify(token, config.SECRET_JWT_CODE);
        const user = User.findOne({ _id: decoded.id }).then((user) => {
            if(!user) {
                res.status(404).send({
                    message: "no user found"
                })
            }
            return next()
            
        }).catch((e)=> {
            return res.status(401).send({
                message: "no user found"
            })
        })
    } catch(e) {
        console.log(e)
        return res.send("Invalid token")
    }
}

module.exports=verifyToken