const express = require('express')

const usuariosController = require('./controllers/usuario-controller')
const tarefasController = require('./controllers/tarefa-controller')
const bodyParser = require('body-parser')

const app = express()
const port = 3001

app.use(bodyParser.json())

usuariosController(app)
tarefasController(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})