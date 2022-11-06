const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
    res.send({
        message: "got your request"
    })
})

module.exports = router