const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const usuariosController = require('./controllers/usuario-controller')
const tarefasController = require('./controllers/tarefa-controller')
const indexController = require('./controllers/index-controller')
const bd = require('./infra/sqlite-db')

const app = express()
const port = process.env.PORT

app.use(bodyParser.json())
app.use(cors())

usuariosController(app, bd)
tarefasController(app, bd)
indexController(app)

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
}) 