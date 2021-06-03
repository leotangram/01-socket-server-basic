const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
app.use(express.static(`${__dirname}/public`))
io.on('connection', (socket) => {
  // socket.emit('welcome-message', {
  //   message: 'Welcome to server',
  //   date: new Date(),
  // })
  socket.on('message-to-server', (data) => {
    console.log(data)
    io.emit('message-from-server', data)
  })
})
server.listen(8080, () => {
  console.log('Server listening on port 8080')
})
