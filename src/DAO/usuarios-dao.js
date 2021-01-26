module.exports = class UsuariosDao {

    constructor(bd){
        this.bd = bd;
    }

    listaUsuarios() {

        return new Promise( (resolve, reject) => {
            this.bd.all("SELECT * FROM USUARIOS;", (error, rows) => {
                if (error) {reject ('Erro na consulta')}
                else resolve(rows)
            })
        })
    }
}