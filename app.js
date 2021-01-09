const express = require('express')
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
app.use('/api/v1/tutor/profile/', tutorProfileRouter)
app.use('/api/v1/tutor/', tutorAuthRouter)
app.use('/api/v1/post/', tutorPostRouter)

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


mongoose
    .connect('mongodb+srv://tos789:tos789@cluster0.0mj5x.mongodb.net/test', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => {
        console.log('database conntected')
        app.listen(PORT, () => {
            console.log(`Server is running ${PORT}`)
        })
    })
    .catch(e => {
        console.log(`This is the error ${ e }
                    `)
    })