export class ClienteModel {
    constructor(id, nome, email, numero, cpf) {
        this._id     =  id;
        this._nome   =  nome;
        this._email  =  this.validaEmail(email);
        this._numero =  this.validaNumero(numero);
        this._cpf    =  this.validaCpf(cpf)
    };

    validaEmail(email) {
        const regex = new RegExp("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]com$");

        if (regex.test(email)) {
            return email;
        } else {
            console.log(email)
            throw new Error('Email inválido!');
        };
    };

     validaNumero(numero) {
        for (let i=0; i<numero.length; i++) {
            if (numero[i] == '-' || numero[i] == '(' || numero[i] == ')' || numero[i] == ' ') {
                numero = numero.replace(numero[i], '');
            };
        };

        if (numero.length > 11 || numero.length < 11) {
            
            throw new Error('Número pequeno');
            
        } else {
            const regex = new RegExp("[1-9]{2}9[0-9]{4}[0-9]{4}");

            if (regex.test(numero)) {
                return numero
            } else {
                throw new Error('Número inválido!')
            }
        };
    };

     validaCpf(cpf) {
        for (let i=0;  i<cpf.length; i++) {
            if (cpf[i] == '.' || cpf[i] == '-' || cpf[i] == ' ') {
                cpf = cpf.replace(cpf[i], '');
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

    get id() {
        return this._id
    }

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

};
