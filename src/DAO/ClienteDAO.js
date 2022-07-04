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
                        "CLIENTES": result
                    });
                };
            });
        });
    };

    getClientesById(id) {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT NOME FROM CLIENTES WHERE ID='${id}'`, (error, result) => {
                if (error) {
                    reject(`Erro ao procurar o usuário: ${error.message}`)
                } else {
                    resolve({
                        "CLIENTE SELECIONADO": result
                    });
                };
            });
        });
    };

    deleteCliente(id) {
        return new Promise((resolve, reject) => {
            this.bd.run(`DELETE FROM CLIENTES WHERE ID=${id}`, (error) => {
                if (error) {
                    reject(`Erro ao deletar o usuário: ${error.message}`)
                } else {
                    resolve('USUÁRIO DELETADO');
                };
            });
        });
    };

    postCliente(cliente) {
        return new Promise((resolve, reject) => {
            this.bd.run(`
            INSERT INTO CLIENTES (id, nome, cpf, email, numero) VALUES(?, ?, ?, ?, ?)`, [
                cliente.id,
                cliente.nome,
                cliente.cpf,
                cliente.email,
                cliente.numero,

            ], (error) => {
                if (error) {
                    reject(`Erro ao inserir o usuário: ${error}`)
                } else {
                    resolve('CLIENTE ADICIONADO');
                };
            });
        });
    };

    putCliente(cliente) {
        return new Promise((resolve, reject) => {
            this.bd.run(`
                UPDATE CLIENTES
                SET nome = ?, cpf = ?, email = ?, numero = ?
                WHERE ID = ?
            `, cliente, (error) => {
                if (error) {
                    reject(`Erro ao atualizar o banco: ${error.message}`)
                } else {
                    resolve('CLIENTE ALTERADO');
                };
            });
        });
    };

    get bd() {
        return this._bd;
    };
};