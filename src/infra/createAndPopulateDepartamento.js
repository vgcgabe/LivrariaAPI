import sqlite3 from "sqlite3";

const db = new sqlite3.Database('./database.db');

const DEPARTAMENTOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "DEPARTAMENTOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "CATEGORIA" varchar(64),
    "RESPONSAVEL" varchar(64),
    "QTDFUNCIONARIOS" varchar(64)
  );`;

const ADD_DEPARTAMENTOS_DATA = `
INSERT INTO DEPARTAMENTOS (ID, CATEGORIA, RESPONSAVEL, QTDFUNCIONARIOS)
VALUES 
    (1, 'Jogos', 'Joao', '2',),
    (2, 'Livros', 'Magali', '10'),
    (3, 'Informática', 'Eduarda', '5')
`

const criaTabelaDepartamentos = () => {
    db.run(DEPARTAMENTOS_SCHEMA, (error)=> {
       if (error) console.log(error);
    });
};


const populaTabelaDepartamentos = () => {
    db.run(ADD_DEPARTAMENTOS_DATA, (error)=> {
       if (error) console.log(error);
    });
};


db.serialize( ()=> {
    criaTabelaDepartamentos();
    populaTabelaDepartamentos();
});