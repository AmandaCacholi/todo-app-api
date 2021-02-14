const bd = require('../infra/sqlite-db');
const TarefasDao = require('../DAO/tarefas-dao');
const tarefasDao = new TarefasDao(bd)

module.exports = (app, bd) => {

	app.get('/tarefa', async (req, res) => {
		try{
			const tarefassRetorno = await tarefasDao.listaTarefas();
			res.status(200).send(tarefassRetorno);
		}catch(erro){
			res.send(erro);
		}
	});

	app.get('/tarefa/:id', async (req, res) => 
	{
		try{
			const tarefassRetorno = await tarefasDao.buscaUnicaTarefas(req.params.id);
			res.status(200).send(tarefassRetorno);
		}catch(erro){
			res.send(erro);
		}
	});

	app.post('/tarefa', async (req, res) => {

		try{
			const tarefassRetorno = await tarefasDao.insereTarefas([req.body.titulo, req.body.descricao, req.body.status, req.body.dataCriacao, req.body.id_usuario]);
			res.status(200).send(tarefassRetorno);
		}catch(erro){
			res.send(erro);
		}
	});

	app.delete('/tarefa/:id', async (req, res) => {

		try{
			const tarefassRetorno = await tarefasDao.deletaTarefas(req.params.id);
			res.status(200).send(tarefassRetorno);
		}catch(erro){
			res.send(erro);
		}
	})

	app.put('/tarefa/:id', async (req, res) => {

		try{
			const tarefassRetorno = await tarefasDao.atualizaTarefas([req.body.titulo, req.body.descricao, req.body.status, req.body.datacriacao, req.body.id_usuario, req.params.id]);
			res.status(200).send(tarefassRetorno);
		}catch(erro){
			res.send(erro);
		}

	})

}