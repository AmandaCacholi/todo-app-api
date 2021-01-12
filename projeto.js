const express = require('express')
const app = express()
const port = 3001


app.get('/usuario', (req, res) => {
  res.send('Rota ativada com GET e recurso usuario: valores de usuario devem ser retornados')
})

app.get('/tarefa', (req, res) => {
    res.send('Rota ativada com GET e recurso tarefa: valores de tarefa devem ser retornados')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})