const Tarefa = require('../models/tarefa')

module.exports = (app, bd) => {
  app.get('/tarefa', (req, res) => {
    res.send('Rota ativada com GET e recurso tarefa: valores de tarefa devem ser retornados');
  })

  app.post('/tarefa', (req, res) => {
    const trf = new Tarefa(req.body.titulo, req.body.descricao, req.body.status, req.body.dataDeCriacao)
    bd.tarefas.push(trf)
    console.log(trf)
    res.send(trf);
  })
}