const User = require('../models/User')

function fetchUserByToken(req) {
    return new Promise((resolve, reject)=>{
        if(req.headers && req.headers.authorization) {
            let authorization=req.headers.authorization
            let decoded
            try {
                decoded=JsonWebToken.verify(authorization, process.env.SECRET_JWT_CODE)
            } catch (e) {
                reject("Token not valid")
                return
            }
            let userId = decoded.id
            User.findOne({ _id: userId }).then((user) => {
                resolve(user)
            }).catch((e)=>{
                reject("Token error")
            })
        } else{
            reject("No Token found")
        }
    })
}

module.exports={ fetchUserByToken }