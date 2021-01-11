const express = require('express')
const { Sequelize } = require('sequelize')
const morgan = require('morgan')
const mongoose = require('mongoose')
const tutorAuthRouter = require('./api_mysql/routers/auth/tutorAuthRouter')
const tutorProfileRouter = require('./api_mysql/routers/profile/tutorProfileRouter')
const tutorPostRouter = require('./api_mysql/routers/tutorPost/tutorPostRouter')
const app = express()

// set all middleware 
const middleware = [
    morgan('dev'),
    express.static('public'),
    express.urlencoded({ extended: true }),
    express.json()
]
app.use(middleware)
    // routers
app.use('/api_mysql/v1/tutor/profile/', tutorProfileRouter)
app.use('/api_mysql/v1/tutor/', tutorAuthRouter)
app.use('/api_mysql/v1/post/', tutorPostRouter)

app.get("/", (req, res, next) => {
    res.json({
        "message": "hello world"
    })
})
app.get('*', (req, res) => {
    res.send('<h1>404 not found exception.</h1>')
})

// server config 
const PORT = process.env.PORT || 8000

const sequelize = new Sequelize(
    'test',
    'root',
    '', {
        host: 'localhost',
        dialect: 'mysql'
    }
)
sequelize.authenticate()
    .then(
        console.log("Database connected successfully")
    )
    .catch(err => {
        console.log('Connection error', err)
    })