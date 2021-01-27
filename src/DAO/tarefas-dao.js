module.exports = class TarefasDao
{
    constructor(bd){
        this.bd = bd;
    }

    listaTrefas(){
        return new Promise ((resolve, reject) =>{
            this.bd.all("SELECT * FROM TAREFAS;", (error, rows) =>{
                if (error)
                {
                    reject('Erro na consulta')
                }
                else resolve(rows)
            })
        })
    }

    // insereTarefas(values){

    //     return new Promise( (resolve, reject) =>{
    //         this.bd.run("INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATADECRIACAO) VALUES (?, ?, ?, ?)", values, (error) =>{
    //             if (error){
    //                 reject ('Erro na consulta')
    //             }
    //             else resolve("Tarefa inserida")
    //         })
    //     })
    // }

}