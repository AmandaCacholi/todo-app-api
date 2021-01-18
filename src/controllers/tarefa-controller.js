module.exports = (app) => {
  app.get('/tarefa', (req, res) => {
    res.send('Rota ativada com GET e recurso tarefa: valores de tarefa devem ser retornados');
  })

  app.post('/tarefa', (req, res) => {
    console.log(req.body.nome)
    res.send('Rota POST de tarefa ativada: tarefa adicionada ao banco de dados');
  })
}