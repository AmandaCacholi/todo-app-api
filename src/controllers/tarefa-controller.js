const bd = require('../infra/sqlite-db');
const TarefasDao = require('../DAO/tarefas-dao');
const tarefasDao = new TarefasDao(bd)

module.exports = (app, bd) => {

	app.get('/tarefa', (req, res) => {
		tarefasDao.listaTrefas()
			.then((tarefas) => {
				res.status(200).send(tarefas)
			})
			.catch((erro) => {
				res.send(erro)
			})
	});

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

	app.post('/tarefa', (req, res) => {

		tarefasDao.insereTarefas([req.body.titulo, req.body.descricao, req.body.status, req.body.datadecriacao, req.body.id_usuario])
			.then((tarefa) => {
				res.status(200).send(tarefa)
			})
			.catch((erro) => {
				res.send(erro)
			})

	});

	app.delete('/tarefa/:id', (req, res) => {

		tarefasDao.deletaTarefas(req.params.id)
			.then((tarefa) => {
				res.status(200).send(tarefa)
			})
			.catch((erro) => {
				res.send(erro)
			})
	})

	app.put('/tarefa/:id', (req, res) => {

		tarefasDao.atualizaTarefas([req.body.titulo, req.body.descricao, req.body.status, req.body.datacriacao, req.body.id_usuario, req.params.id])
			.then((tarefa) => {
				res.status(200).send(tarefa)
			})
			.catch((erro) => {
				res.send(erro)
			})
	})

}