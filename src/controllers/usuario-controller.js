const UsuariosDao = require('../DAO/usuarios-dao');
const bd = require('../infra/sqlite-db');
const usuariosDao = new UsuariosDao(bd)

module.exports = (app, bd) => {

	app.get('/usuario', async (req, res) => {

		try{
			const usuariosRetorno = await usuariosDao.listaUsuarios();
			res.status(200).send(usuariosRetorno);
		}catch(erro){
			res.send(erro);
		}
	});

	app.get('/usuario/:id', async (req, res) => 
	{
		try{
			const usuariosRetorno = await usuariosDao.buscaUnicaUsuarios(req.params.id);
			res.status(200).send(usuariosRetorno);
		}catch(erro){
			res.send(erro);
		}
	});

	app.post('/usuario', async (req, res) => {

		try{
			const usuariosRetorno = await usuariosDao.insereUsuarios([req.body.nome, req.body.email, req.body.senha]);
			res.status(200).send(usuariosRetorno);
		}catch(erro){
			res.send(erro);
		}

	});

	app.delete('/usuario/:id', async (req, res) => {

		try{
			const usuariosRetorno = await usuariosDao.deletaUsuarios(req.params.id);
			res.status(200).send(usuariosRetorno);
		}catch(erro){
			res.send(erro);
		}

	})

	app.put('/usuario/:id', async (req, res) => {

		try{
			const usuariosRetorno = await usuariosDao.atualizaUsuarios([req.body.nome, req.body.email, req.body.senha, req.params.id]);
			res.status(200).send(usuariosRetorno);
		}catch(erro){
			res.send(erro);
		}

	})
}