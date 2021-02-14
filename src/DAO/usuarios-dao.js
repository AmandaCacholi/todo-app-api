module.exports = class UsuariosDao {

	constructor(bd) {
		this.bd = bd;
	}

	listaUsuarios() {

		return new Promise((resolve, reject) => {
			this.bd.all("SELECT * FROM USUARIOS;", (error, rows) => {
				if (error) {
					reject('Erro na consulta')
				}
				else resolve(rows)
			})
		})

	}

	buscaUnicaUsuarios(parametro)
    {
        return new Promise((resolve, reject)=>
        {
            this.bd.get("SELECT * FROM USUARIOS WHERE id = ?", parametro,
            (error, rows)=>
            {
                if(error) reject('erro ao buscar usuario');
                else resolve(rows);
            })
        })
    }

	insereUsuarios(values) {

		return new Promise((resolve, reject) => {
			this.bd.run("INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?, ?, ?)", values, (error) => {
				if (error) {
					reject('Erro na consulta')
				}
				else resolve("Usuário inserido")
			})
		})
	}

	deletaUsuarios(parametro) {

		return new Promise((resolve, reject) => {
			this.bd.run("DELETE FROM USUARIOS WHERE id = ?", parametro, (error) => {
				if (error) reject('erro ao deletar tabela');
				else resolve('Usuário excluído.');
			})
		})
	}

	atualizaUsuarios(values) {

		return new Promise((resolve, reject) => {
			this.bd.run("UPDATE USUARIOS SET NOME = ?, EMAIL = ?, SENHA = ? WHERE id = ?", values, (error) => {
				if (error) reject('erro ao atualizar tabela');
				else resolve('Usuário atualizado.');
			})
		})
	}
}