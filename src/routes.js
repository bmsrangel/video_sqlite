const express = require('express')
const routes = express.Router()

const dbController = require('./controllers/dbController')

routes.get('/pessoas', dbController.listarPessoas)
routes.post('/pessoas', dbController.cadastrarPessoa)

module.exports = routes
