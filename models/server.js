const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const path = require('path')

class Server {
  constructor() {
    this.app = express()
    this.port = 8080
    this.server = http.createServer(this.app)
    this.io = socketio(this.server, {
      /* configurations */
    })
  }
  middlewares() {
    this.app.use(express.static(path.resolve(__dirname, '../public')))
  }
  configureSockets() {
    // ???
  }
  execute() {
    this.middlewares()
    this.configureSockets()
    this.server.listen(this.port, () => {
      console.log(`Server listening on port: ${this.port}`)
    })
  }
}

module.exports = Server
