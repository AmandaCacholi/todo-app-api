const Usuario = require('../models/usuario')
const UsuariosDao = require('../DAO/usuarios-dao');
const bd = require('../infra/sqlite-db');
const usuariosDao = new UsuariosDao(bd)

module.exports = (app, bd) => {

  app.get('/usuario', (req, res) => {

    usuariosDao.listaUsuarios()
    .then((usuarios)=>{
      res.send(usuarios);
    })
    .catch((erro)=>{
      res.send(erro);
    })

  });

  // app.get('/usuario', (req, res) => {
  //   res.send(bd.usuarios)
  // })

  app.get('/usuario/:email', (req, res) => {
    const results = []
    for (let i = 0; i < bd.usuarios.length; i++)
    {
      if(bd.usuarios[i].email==req.params.email)
      {
        results.push(bd.usuarios[i])
      }
    }
    res.send(results)
  })

  app.post('/usuario', (req, res) => {
    bd.run("INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?, ?, ?)", [req.body.nome, req.body.email, req.body.senha], (error) => {
      if (error){ 
        throw new Error('Erro na consulta')}
      else res.send("Usuário inserido")
    })
  });

  // app.post('/usuario', (req, res) => {
  //   const usr = new Usuario(req.body.nome, req.body.email, req.body.senha)
  //   bd.usuarios.push(usr)
  //   console.log(usr)
  //   res.send(usr)
  // })

  app.delete('/usuario/:email', (req, res) => {
    for (let i = 0; i < bd.usuarios.length; i++){
      if(bd.usuarios[i].email==req.params.email)
      {
        bd.usuarios.splice(i, 1)
        res.send(`Usuário com o email ${req.params.email} excluído.`)
      }
    }
  })

  app.put('/usuario/:email', (req, res) => {
    for (let i = 0; i < bd.usuarios.length; i++){
      if(bd.usuarios[i].email==req.params.email)
      {
        bd.usuarios[i].nome = req.body.nome;
        bd.usuarios[i].email = req.body.email;
        bd.usuarios[i].senha = req.body.senha;
        res.send(`Usuário com o email ${req.body.email} foi atualizado.`);
      }
    }
  })
}