export class FornecedorModel {
    constructor(id, nome, cnpj, endereco) {
        this._id       =  id;
        this._nome     =  nome;
        this._endereco =  endereco;
        this._cnpj     =  this.validaCnpj(cnpj);
        
    };

     validaCnpj(cnpj) {
        for (let i=0;  i<cnpj.length; i++) {

            if (cnpj[i] == '.' || cnpj[i] == '-' || cnpj[i] == ' ') {
                cnpj = cnpj.replace(cnpj[i], '');
            };
        };
        
        if (cnpj.length != 14) {
            throw new Error('CNPJ inválido!');

        } else {
            const regex = new RegExp('(^\[0-9]{2}\[0-9]{3}\[0-9]{3}\[0-9]{4}\[0-9]{2}$)');

            if (regex.test(cnpj)) {
                return cnpj;

            } else {
                throw new Error('CNPJ inválido!');
            };
        };
    };

    get id() {
        return this._id
    }

    get nome() {
        return this._nome;
    };

    get endereco() {
        return this._endereco;
    };

    get cnpj() {
        return this._cnpj;
    };
};