const Server = require('./models/server')

const server = new Server()

server.execute()

// io.on('connection', (socket) => {
//   // socket.emit('welcome-message', {
//   //   message: 'Welcome to server',
//   //   date: new Date(),
//   // })
//   socket.on('message-to-server', (data) => {
//     console.log(data)
//     io.emit('message-from-server', data)
//   })
// })
