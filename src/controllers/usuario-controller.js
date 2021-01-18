module.exports = (app) => {
  app.get('/usuario', (req, res) => {
    res.send('Rota ativada com GET e recurso usuario: valores de usuario devem ser retornados')
  })

  app.post('/usuario', (req, res) => {
    console.log(req.body.curso)
    res.send('Rota POST de usuario ativada: usuario adicionado ao banco de dados')
  })
}