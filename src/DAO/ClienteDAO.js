export class ClienteDAO {
    constructor(bd) {
        this._bd = bd;
    };

    getClientes() {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM CLIENTES`, (error, result) => {
                if (error) {
                    reject(`Erro ao selecionar a tabela: ${error.message}`);
                } else {
                    resolve({"TABLE": result});
                };
            });
        });
    };

    get bd() {
        return this._bd;
    }
}