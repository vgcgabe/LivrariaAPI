export class Funcionario{
    constructor(nome, id, cpf, idade, email){
        this.nome = nome;
        this.id = id;
        this.cpf = cpf;
        this.idade = idade;
        this.email = email;
    };

    get nome() {
        return this.nome;
    };

    get id() {
        return this.id;
    };

    get cpf() {
        return this.cpf;
    };

    get idade() {
        return this.idade;
    };

    get email() {
        return this.email;
    };
};