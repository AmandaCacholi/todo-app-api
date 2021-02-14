module.exports = class TarefasDao {
	constructor(bd) {
		this.bd = bd;
	}

	listaTarefas() {
		return new Promise((resolve, reject) => {
			this.bd.all("SELECT * FROM TAREFAS;", (error, rows) => {
				if (error) {
					reject('Erro na consulta')
				}
				else resolve(rows)
			})
		})
	}

	buscaUnicaTarefas(parametro)
    {
        return new Promise((resolve, reject)=>
        {
            this.bd.get("SELECT * FROM TAREFAS WHERE id = ?", parametro,
            (error, rows)=>
            {
                if(error) reject('erro ao buscar tarefa');
                else resolve(rows);
            })
        })
    }

	insereTarefas(values) {

		return new Promise((resolve, reject) => {
			this.bd.run("INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?, ?, ?, ?, ?)", values, (error) => {
				if (error) {
					reject('Erro ao adicionar tarefa')
				}
				else resolve("Tarefa inserida")
			})
		})
	}

	deletaTarefas(parametro) {

		return new Promise((resolve, reject) => {
			this.bd.run("DELETE FROM TAREFAS WHERE id = ?", parametro, (error) => {
				if (error) reject('Erro ao deletar tarefa');
				else resolve('Tarefa excluída.');
			})
		})
	}

	atualizaTarefas(values) {

		return new Promise((resolve, reject) => {
			this.bd.run("UPDATE TAREFAS SET TITULO = ?, DESCRICAO = ?, STATUS = ?, DATACRIACAO = ?, ID_USUARIO = ? WHERE id = ?", values, (error) => {
				if (error) reject('erro ao atualizar tarefa');
				else resolve('Tarefa atualizada.');
			})
		})
	}
}