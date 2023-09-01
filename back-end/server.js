require('dotenv').config()
const express = require('express')
const bcrypt = require('bcryptjs')
const bodyParser = require('body-parser')
const path = require('path')

const LoginRoute = require('./routes/authRoutes')
const mediaRoute = require('./routes/mediaRoutes')
const db = require('./db/db')

const app = express()
// app.use(express.static(path.join(__dirname, './public')))
// app.set('views', path.join(__dirname, './public/views'))
// app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(LoginRoute)
app.use(mediaRoute)
app.use(homeRoute)


const port = process.env.PORT

app.listen(port, () => {
    console.log(`server is up and running on port ${port}`)
})