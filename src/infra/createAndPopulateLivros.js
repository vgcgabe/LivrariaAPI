import sqlite3 from "sqlite3";

const db = new sqlite3.Database('./src/infra/database.db');

// Livros Magali:
const CREATE = `
CREATE TABLE IF NOT EXISTS "LIVROS"(
"id" INTEGER PRIMARY KEY AUTOINCREMENT,
"titulo" varchar(50),
"autor" varchar(50),
"editora" varchar(50),
"preco" varchar(50)
);`;

const INSERT = `INSERT INTO LIVROS (id, titulo, autor, editora, preco) 
VALUES  (1, 'Fazendinha', 'Magali Lima', 'BOM JESUS', '49,90'),
        (2, 'A casa dos bixinhos', 'Magali Lima', 'BOM JESUS', '27,90'),
        (3, 'Ursinhos', 'Magali Lima', 'BOM JESUS', '35,99'),
        (4, 'To cansada', 'Magali Lima', 'BOM JESUS', '42,90')`;


function criaTabelaLivros(){
    db.run(CREATE,(error) => {
        if(error) console.log('erro ao criar tabela', error)
    })
}

function populaTabelaLivros(){
    db.run(INSERT ,(error) => {
     if(error) console.log('erro ao inserir tabela', error)
})
}

db.serialize(()=> {
  criaTabelaLivros();
  populaTabelaLivros();
})
