const { response } = require("express")

module.exports = (app)=>{
    app.get('/', (req, res)=>{
        res.send('<h1>Para acessar usuários clique <a href="https://todo-api-resilia.herokuapp.com/usuario">aqui</a>.</h1><h1>Para acessar tarefas clique <a href="https://todo-api-resilia.herokuapp.com/tarefa">aqui</a>.</h1>')
    })
}