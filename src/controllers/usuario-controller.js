module.exports = (app) => {
  app.get('/usuario', (req, res) => {
    res.send('<h1>Usuários</h1>')
  })
}