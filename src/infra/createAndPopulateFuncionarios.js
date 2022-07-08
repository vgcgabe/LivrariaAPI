import sqlite3 from "sqlite3";

const bd = new sqlite3.Database('./src/infra/database.db');

const CREATETABLEFUNCIONARIOS = `CREATE TABLE IF NOT EXISTS "FUNCIONARIOS"(
    "nome" varchar(255),
    "id" integer primary key autoincrement,
    "cpf" integer(11),
    "idade" integer (3),
    "email" varchar(64)
    );`;

const INSERTINTO = `INSERT INTO FUNCIONARIOS(nome, id, cpf, idade, email) 
VALUES ('Daphine', 1, 12345678912, 34, 'daphine@email.com');`;

function create(){
    bd.run(CREATETABLEFUNCIONARIOS, (error) => {
        if(error) console.log("Erro ao criar tabela", error);
    });
}

function insert(){
    bd.run(INSERTINTO, (error) => {
        if(error) console.log("Erro ao inserir valores", error);
    });
}

bd.serialize(() => {
    create();
    insert();
});
