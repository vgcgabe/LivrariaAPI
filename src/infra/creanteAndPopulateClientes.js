import sqlite3 from "sqlite3";

const db = new sqlite3.Database('./database.db');

const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "NUMERO" varchar(64),
    "CPF" varchar(64)
  );`;

const ADD_CLIENTES_DATA = `
INSERT INTO CLIENTES (ID, NOME, EMAIL, NUMERO, CPF)
VALUES 
    (1, 'Eugênio Oliveira', 'eugenio.oliveira@bol.com.br', '45918212000', '11439590071'),
    (2, 'Olívia Ribeiro', 'olivia.ribeiro@gmail.com', '09010191001', '11424173964'),
    (3, 'Mirtes Faria Lima', 'mirtes_fl@yahoo.com', '38314637009', '11723889761')
`

const criaTabelaClientes = () => {
    db.run(CLIENTES_SCHEMA, (error)=> {
       if (error) console.log(error);
    });
};


const populaTabelaClientes = () => {
    db.run(ADD_CLIENTES_DATA, (error)=> {
       if (error) console.log(error);
    });
};


db.serialize( ()=> {
    criaTabelaClientes();
    populaTabelaClientes();
});