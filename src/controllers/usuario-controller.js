const UsuariosDao = require('../DAO/usuarios-dao');
const bd = require('../infra/sqlite-db');
const usuariosDao = new UsuariosDao(bd)

module.exports = (app, bd) => {

  app.get('/usuario', (req, res) =>{

    usuariosDao.listaUsuarios()
    .then((usuarios)=>{
      res.send(usuarios);
    })
    .catch((erro)=>{
      res.send(erro);
    })
  });

  // app.get('/usuario/:email', (req, res) => {
  //   const results = []
  //   for (let i = 0; i < bd.usuarios.length; i++)
  //   {
  //     if(bd.usuarios[i].email==req.params.email)
  //     {
  //       results.push(bd.usuarios[i])
  //     }
  //   }
  //   res.send(results)
  // })

  app.post('/usuario', (req, res) => {

    usuariosDao.insereUsuarios([req.body.nome, req.body.email, req.body.senha])
    .then((usuario) => {
      res.send(usuario)
    })
    .catch((erro) => {
      res.send(erro)
    })

  });

  app.delete('/usuario/:id', (req, res) => {
    
    usuariosDao.deletaUsuarios(req.params.id)
    .then((usuario) => {
      res.send(usuario)
    })
    .catch((erro) => {
      res.send(erro)
    })
  })

  app.put('/usuario/:id', (req, res) => {
    
    usuariosDao.atualizaUsuarios([req.body.nome, req.body.email, req.body.senha, req.params.id])
    .then((usuario) =>{
    res.send(usuario)})
    .catch((erro) =>{
    res.send(erro)})
  })
}