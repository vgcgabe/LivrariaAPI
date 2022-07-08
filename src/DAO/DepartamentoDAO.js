export class DepartamentoDAO {
    constructor(bd) {
        this._bd = bd;
    };

    getDepartamentos() {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM DEPARTAMENTOS`, (error, result) => {
                if (error) {
                    reject(`Erro ao selecionar a tabela: ${error.message}`);
                } else {
                    resolve({
                        "DEPARTAMENTOS": result
                    });
                };
            });
        });
    };

    getDepartamentosById(id) {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT CATEGORIA FROM DEPARTAMENTOS WHERE ID='${id}'`, (error, result) => {
                if (error) {
                    reject(`Erro ao procurar o departamento: ${error.message}`)
                } else {
                    resolve({
                        "DEPARTAMENTO SELECIONADO": result
                    });
                };
            });
        });
    };

    deleteDepartamento(id) {
        return new Promise((resolve, reject) => {
            this.bd.run(`DELETE FROM DEPARTAMENTOS WHERE ID=${id}`, (error) => {
                if (error) {
                    reject(`Erro ao deletar o departamento: ${error.message}`)
                } else {
                    resolve('DEPARTAMENTO DELETADO');
                };
            });
        });
    };

    postDepartamento(departamento) {
        return new Promise((resolve, reject) => {
            this.bd.run(`
            INSERT INTO DEPARTAMENTOS (id, categoria, responsavel, qtdFuncionarios) VALUES(?, ?, ?, ?)`, [
                departamento.id,
                departamento.categoria,
                departamento.responsavel,
                departamento.qtdFuncionarios

            ], (error) => {
                if (error) {
                    reject(`Erro ao inserir o departamento: ${error}`)
                } else {
                    resolve('DEPARTAMENTO ADICIONADO');
                };
            });
        });
    };

    putDepartamento(departamento) {
        return new Promise((resolve, reject) => {
            this.bd.run(`
                UPDATE DEPARTAMENTOS
                SET categoria = ?, responsavel = ?, qtdFuncionarios = ?
                WHERE ID = ?
            `, departamento, (error) => {
                if (error) {
                    reject(`Erro ao atualizar o banco: ${error.message}`)
                } else {
                    resolve('DEPARTAMENTO ALTERADO');
                };
            });
        });
    };

    get bd() {
        return this._bd;
    };
};