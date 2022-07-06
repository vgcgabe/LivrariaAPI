import sqlite3 from "sqlite3";

const db = new sqlite3.Database('./database.db');

const FORNECEDORES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FORNECEDORES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "CNPJ" varchar(64),
    "ENDERECO" varchar(64)

  );`;

const ADD_FORNECEDORES_DATA = `
INSERT INTO FORNECEDORES (ID, NOME, CNPJ, ENDERECO)
VALUES 
    (1, 'Fornecedor1', '47423259000109', 'Rua do Caju 123'),
    (2, 'Fornecedor2', '65376124000111', 'Rua do Caju 123'),
    (3, 'Fornecedor3', '46426234000104', 'Rua do Caju 123')
`

const criaTabelaFornecedores = () => {
    db.run(FORNECEDORES_SCHEMA, (error)=> {
       if (error) console.log(error);
    });
};


const populaTabelaFornecedores = () => {
    db.run(ADD_FORNECEDORES_DATA, (error)=> {
       if (error) console.log(error);
    });
};


db.serialize( ()=> {
    criaTabelaFornecedores();
    populaTabelaFornecedores();
});