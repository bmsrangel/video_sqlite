const express = require('express')
const cors = require('cors')

const app = express()
const server = require('http').Server(app)

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  return res.send('Hello, World!')
})

app.use('/api', require('./src/routes'))

server.listen(3001)
