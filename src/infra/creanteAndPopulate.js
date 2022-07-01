import sqlite3 from "sqlite3";

const db = new sqlite3.Database('./database.db');

const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "CPF" varchar(64),
    "NUMERO" varchar(64)
  );`;

const ADD_CLIENTES_DATA = `
INSERT INTO CLIENTES (ID, NOME, EMAIL, SENHA)
VALUES 
    (1, 'Eugênio Oliveira', 'eugenio.oliveira@bol.com.br', '45918212000', '11439590071'),
    (2, 'Olívia Ribeiro', 'olivia.ribeiro@gmail.com', '09010191001', '11424173964'),
    (3, 'Mirtes Faria Lima', 'mirtes_fl@yahoo.com', '38314637009', '11723889761')
`

const criaTabelaCli = () => {
    db.run(CLIENTES_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de usuários");
    });
}


const populaTabelaCli = () => {
    db.run(ADD_CLIENTES_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários");
    });
}


//==== Tarefas
const TAREFAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS TAREFAS (
    ID INTEGER PRIMARY KEY AUTOINCREMENT, 
    TITULO VARCHAR(64),
    DESCRICAO TEXT,
    STATUS VARCHAR(32),
    DATACRIACAO VARCHAR(32),
    ID_USUARIO INTEGER,
    FOREIGN KEY(ID_USUARIO) REFERENCES USUARIOD(ID)
);`;

const ADD_TAREFAS_DATA = `INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO)
VALUES 
       ('Yoga', 'Fazer yoga segunda e quarta', 'Continuo', '2021-01-10', 2),
       ('Médico', 'Consulta com Dr. Ayrton sexta', 'TODO', '2021-01-13', 1),
       ('Pagar contas', 'Pagar boletos de água e luz', 'DOING', '2021-01-02', 2),
       ('Mercado', 'Pegar lista na geladeira e fazer compras', 'TODO', '2021-01-08', 2),
       ('Dentista', 'Consulta com Dra Andreia sexta', 'TODO', '2021-01-11', 1),
       ('Pagar financiamento carro', 'Pagar parcela do mês do financiamento', 'Contínuo', '2021-01-05', 3)
`

function criaTabelaTarefas() {
    db.run(TAREFAS_SCHEMA, (error)=> {
        if(error) console.log("Erro ao criar tabela de Tarefas");
    });
}


function populaTabelaTarefas() {
    db.run(ADD_TAREFAS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de Tarefas");
    });
}

db.serialize( ()=> {
    criaTabelaCli();
    populaTabelaCli();
    criaTabelaTarefas();
    populaTabelaTarefas();
});