const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)


const PORT = process.env.PORT || 8000
server.listen(PORT, () => {
    console.log('Server is running ')
})