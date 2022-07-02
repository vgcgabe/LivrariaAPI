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
                    resolve({
                        "TABLE": result
                    });
                };
            });
        });
    };

    getClientesById(cpf) {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT NOME FROM CLIENTES WHERE CPF='${cpf}'`, (error, result) => {
                if (error) {
                    reject(`Erro ao procurar o usuário: ${error.message}`)
                } else {
                    resolve({
                        "USUARIO": result
                    });
                };
            });
        });
    };

    deleteCliente(cpf) {
        return new Promise((resolve, reject) => {
            this.bd.all(`DELETE FROM CLIENTES WHERE CPF='${cpf}'`, (error, result) => {
                if (error) {
                    reject(`Erro ao deletar o usuário: ${error.message}`)
                } else {
                    resolve({
                        "USUARIO DELETADO": result
                    });
                };
            });
        });
    };

    postCliente(cliente) {
        return new Promise((resolve, reject) => {
            this.bd.run(`
            UPDATE Clientes SET
            nome=?, sobrenome=?, cpf=?, email=?, numero=?
            WHERE id=?`, [
                cliente.nome,
                cliente.cpf,
                cliente.email,
                cliente.numero,
                id
            ], (error, result) => {
                if (error) {
                    reject(`Erro ao inserir o usuário: ${error}`)
                } else {
                    resolve({
                        "USUARIO ADICIONADO": result
                    });
                };
            });
        });
    };

    get bd() {
        return this._bd;
    };
};