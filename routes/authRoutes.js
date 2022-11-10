const express = require('express')
const router = express.Router()

const { fetchUserByToken } = require('../helpers/loginHelper')
const auth = require('../middleware/auth')

const loginController = require('../controllers/loginController')

const multer = require('multer')
const fs = require('fs')

router.post('/login',loginController.login)
router.get('/secure', auth, (req, res) => {
    res.send({
        message: "authorized"
    })
})

module.exports = router