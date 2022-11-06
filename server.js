require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const LoginRoute = require('./routes/authRoutes')

const app = express()

app.use(express.json())
app.use(LoginRoute)



const port = 3000 || process.env.PORT

app.listen(port, () => {
    console.log(`server is up and running on port ${port}`)
})