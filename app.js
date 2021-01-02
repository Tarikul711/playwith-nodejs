const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const tutorAuthRouter = require('./api/routers/auth/tutorAuthRouter')
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
app.use('api/v1/tutor/', tutorAuthRouter)
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
app.listen(PORT, () => {
    console.log(`Server is running now  ${PORT}`)
})