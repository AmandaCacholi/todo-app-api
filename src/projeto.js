const express = require('express')
const bodyParser = require('body-parser')

const usuariosController = require('./controllers/usuario-controller')
const tarefasController = require('./controllers/tarefa-controller')
const Usuario = require('./models/usuario')
const Tarefa = require('./models/tarefa')
const bd = require('./infra/sqlite-db')

const app = express()
const port = 3001

app.use(bodyParser.json())

usuariosController(app, bd)
tarefasController(app, bd)

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})