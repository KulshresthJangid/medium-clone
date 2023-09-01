const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    interests: {
        type: Array
    }, 
    profilePic: {
        data: Buffer,
        contentType: String
    }
})


module.exports = mongoose.model('User', userSchema)