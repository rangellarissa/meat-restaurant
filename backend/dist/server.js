const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const express = Express('express')
const fs = fs('fs')
const https = https('https')

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

server.post('/login', (req, resp)=>{
  resp.json({message: 'ok'})
})


// Use default router
server.use(router)

const options = {
  cert: fs.readFileSync('./backend/keys/cert.pem'),
  key: fs.readFileSync('./backend/keys/key.pem'),
}

https.createServer(options, server).listen(3001, () => {
  console.log('JSON Server is running on https://localhost:3001')
})