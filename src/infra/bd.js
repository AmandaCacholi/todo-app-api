const Usuario = require('../models/usuario')
const Tarefa = require('../models/tarefa')

module.exports = {
    usuarios: [new Usuario("Amanda", "amanda@email.com", "123")],
    tarefas: [new Tarefa("Frances", "Estudar tempos verbais", "Em andamento", "21/01/2021")]
}