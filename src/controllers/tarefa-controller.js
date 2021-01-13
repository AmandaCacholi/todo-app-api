module.exports = (app) =>{
  app.get('/tarefa', (req, res) => {
    res.send('<h1>Tarefas</h1>');
  })
}