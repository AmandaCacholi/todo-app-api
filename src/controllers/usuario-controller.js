const Usuario = require('../models/usuario')

module.exports = (app, bd) => {
  app.get('/usuario', (req, res) => {
    res.send('Rota ativada com GET e recurso usuario: valores de usuario devem ser retornados')
  })

  app.post('/usuario', (req, res) => {
    const usr = new Usuario(req.body.nome, req.body.email, req.body.senha)
    bd.usuarios.push(usr)
    console.log(usr)
    res.send(usr)
  })
}