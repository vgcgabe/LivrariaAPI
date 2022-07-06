export class FornecedorDAO {
    constructor(bd) {
        this._bd = bd;
    };

    getFornecedor() {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM FORNECEDORES`, (error, result) => {
                if (error) {
                    reject(`Erro ao selecionar a tabela: ${error.message}`);
                } else {
                    resolve({
                        "FORNECEDORES": result
                    });
                };
            });
        });
    };

    getFornecedoresById(id) {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM FORNECEDORES WHERE ID='${id}'`, (error, result) => {
                if (error) {
                    reject(`Erro ao procurar o fornecedor: ${error.message}`)
                } else {
                    resolve(
                        result);
                };
            });
        });
    };

    deleteFornecedor(id) {
        return new Promise((resolve, reject) => {
            this.bd.run(`DELETE FROM FORNECEDORES WHERE ID=${id}`, (error) => {
                if (error) {
                    reject(`Erro ao deletar o fornecedor: ${error.message}`)
                } else {
                    resolve('FORNECEDOR DELETADO');
                };
            });
        });
    };

    postFornecedor(fornecedor) {
        return new Promise((resolve, reject) => {
            this.bd.run(`
            INSERT INTO FORNECEDORES (id, nome, endereco, cnpj) VALUES(?, ?, ?, ?, ?)`, [
                fornecedor.id,
                fornecedor.nome,
                fornecedor.endereco,
                fornecedor.cnpj,

            ], (error) => {
                if (error) {
                    reject(`Erro ao inserir o fornecedor: ${error}`)
                } else {
                    resolve('FORNECEDOR ADICIONADO');
                };
            });
        });
    };

    putCliente(fornecedor) {
        return new Promise((resolve, reject) => {
            this.bd.run(`
                UPDATE FORNECEDORES
                SET nome = ?, endereco = ?, cnpj = ?
                WHERE ID = ?
            `, fornecedor, (error) => {
                if (error) {
                    reject(`Erro ao atualizar o banco: ${error.message}`)
                } else {
                    resolve('FORNECEDOR ALTERADO');
                };
            });
        });
    };

    get bd() {
        return this._bd;
    };
};