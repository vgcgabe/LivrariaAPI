export class ClienteModel {
    constructor(nome, email, numero, cpf) {
        this._nome   =  nome;
        this._email  =  this.validaEmail(email);
        this._numero =  this.validaNumero(numero);
        this._cpf    =  this.validaCpf(cpf);
    };

    static formataNome(nome) {
        return;
    };

    static validaCpf(cpf) {
        return;
    };

    static validaEmail(email) {
        return;
    };

    static validaNumero(numero) {
        return;
    };

    static validaCpf(cpf) {
        return;
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