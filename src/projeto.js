const express = require('express')

const usuariosController = require('./controllers/usuario-controller')
const tarefasController = require('./controllers/tarefa-controller')

const app = express()
const port = 3001

usuariosController(app)
tarefasController(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})