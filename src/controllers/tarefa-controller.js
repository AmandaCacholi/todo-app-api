const bd = require('../infra/sqlite-db');
const TarefasDao = require('../DAO/tarefas-dao');
const tarefasDao = new TarefasDao(bd)

module.exports = (app, bd) => {

  app.get('/tarefa', (req, res) => 
  {
    tarefasDao.listaTrefas()
    .then((tarefas) =>
    {
      res.send(tarefas)
    })
    .catch((erro) =>
    {
      res.send(erro)
    })
  });

  // app.get('/tarefa', (req, res) => {
  //   res.send(bd.tarefas);
  // })

  // app.get('/tarefa/:titulo', (req, res) => {
  //   const results = []
  //   for (let i = 0; i < bd.tarefas.length; i++){
  //     if(bd.tarefas[i].titulo==req.params.titulo)
  //     {
  //       results.push(bd.tarefas[i])
  //     }
  //   }
  //   res.send(results)
  // })

  // app.post('/tarefa', (req, res) => {

  //   tarefasDao.insereTarefas([req.body.titulo, req.body.descricao, req.body.status, req.body.datadecriacao])
  //   .then((tarefa) => {
  //     res.send(tarefa)
  //   })
  //   .catch((erro) => {
  //     res.send(erro)
  //   })

  // });

  // app.post('/tarefa', (req, res) => {
  //   const trf = new Tarefa(req.body.titulo, req.body.descricao, req.body.status, req.body.dataDeCriacao)
  //   bd.tarefas.push(trf)
  //   console.log(trf)
  //   res.send(trf);
  // })

  // app.delete('/tarefa/:titulo', (req, res) => {
  //   for (let i = 0; i < bd.tarefas.length; i++){
  //     if(bd.tarefas[i].titulo==req.params.titulo)
  //     {
  //       bd.tarefas.splice(i, 1)
  //       res.send(`Tarefa com o título ${req.params.titulo} excluído.`)
  //     }
  //   }
  // })

  // app.put('/tarefa/:titulo', (req, res) => {
  //   for (let i = 0; i < bd.tarefas.length; i++){
  //     if(bd.tarefas[i].titulo==req.params.titulo)
  //     {
  //       bd.tarefas[i].titulo = req.body.titulo;
  //       bd.tarefas[i].descricao = req.body.descricao;
  //       bd.tarefas[i].status = req.body.status;
  //       bd.tarefas[i].dataDeCriacao = req.body.dataDeCriacao;

  //       res.send(`Tarefa com o titulo ${req.body.titulo} foi atualizada.`)
  //     }
  //   }
  // })

}