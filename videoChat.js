const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const { v4: uuidV4 } = require('uuid')


app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res, next) => {
    res.redirect(`/${uuidV4()}`)
})

app.get('/:room', (req, res, next) => {
    res.render('room.ejs', { roomId: req.params.room })
})

// connect socket io

io.on('connection', socket => {
    socket.on('join-room', (roomId, userId) => {
        console.log(roomId, userId)
    })
})


// server config 
const PORT = process.env.PORT || 8000
server.listen(PORT, () => {
    console.log('Server is running ')
})