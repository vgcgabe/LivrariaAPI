export class ClienteModel {
    constructor(nome, email, numero, cpf) {
        this._nome   =  nome;
        this._email  =  this.validaEmail(email);
        this._numero =  this.validaNumero(numero);
        this._cpf    =  this.validaCpf(cpf);
    };

    static validaEmail(email) {
        const regex = new RegExp("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");

        if (regex.test(email)) {
            return email;
        } else {
            throw new Error('Email inválido!');
        };
    };

    static validaNumero(numero) {
        for (i of numero) {
            if (i == '-' || i == '(' || i == ')') {
                numero = numero.replace(i, '');
            };
        };

        if (numero.length != 11) {
            throw new Error('Número inválido!');
        } else {
            const regex = new RegExp("[1-9]{2}9[0-9]{4}[0-9]{4}");

            if (regex.test(numero)) {
                return numero
            };
        };
    };

    static validaCpf(cpf) {
        for (i of cpf) {
            if (i == '.' || i == '-') {
                cpf = cpf.replace(i, '');
            };
        };
        
        if (cpf.length != 11) {
            throw new Error('CPF inválido!');
            
        } else {
            const regex = new RegExp('([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})');

            if (regex.test(cpf)) {
                return cpf;
            } else {
                throw new Error('CPF inválido!');
            };
        };
    };

    get nome() {
        return this._nome;
    };

    get email() {
        return this._email;
    };

    get numero() {
        return this._numero;
    };

    get cpf() {
        return this._cpf;
    };

}