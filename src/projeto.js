const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const usuariosController = require('./controllers/usuario-controller')
const tarefasController = require('./controllers/tarefa-controller')
const bd = require('./infra/sqlite-db')

const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(cors())

usuariosController(app, bd)
tarefasController(app, bd)

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
}) 