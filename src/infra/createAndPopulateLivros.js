import sqlite3 from "sqlite3";

const db = new sqlite3.Database('./src/infra/database.db');

// Livros Magali:
const CREATE = `
CREATE TABLE IF NOT EXISTS "LIVROS"(
"id" INTEGER PRIMARY KEY AUTOINCREMENT,
"titulo" varchar(50),
"autor" varchar(50),
"editora" varchar(50),
"preco" varchar(50),
"categoria" varchar(50),
"img" varchar(255)
);`;

const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "NUMERO" varchar(64),
    "CPF" varchar(64)
  );`;


const INSERT = `INSERT INTO LIVROS (id, titulo, autor, editora, preco, categoria, img) 
VALUES  (1, 'O Senhor dos Anéis: A Sociedade do Anel', 'J.R.R Tolkien', 'Novatec', '10,99', 'Ficção', 'https://images-na.ssl-images-amazon.com/images/I/41RBd2DvmgL._SX325_BO1,204,203,200_.jpg'),
        (2, 'O Guia do Mochileiro das Galáxias', 'Douglas Adams', 'Editora Arqueiro', '10,99', 'Ficção', 'https://images-na.ssl-images-amazon.com/images/I/51bJleesV-L._SX343_BO1,204,203,200_.jpg'),
        (3, 'Cavernas de Aço', 'Isaac Asimov', 'Aleph', '10,99', 'Ficção', 'https://images-na.ssl-images-amazon.com/images/I/51cL8NBxRzL._SX323_BO1,204,203,200_.jpg'),
        (4, 'Um Estudo em Vermelho', 'Sir Arthur Conan Doyle', 'Clássicos Zahar', '10,99', 'Ficção', 'https://images-na.ssl-images-amazon.com/images/I/51pNmTP7BRL._SX350_BO1,204,203,200_.jpg'),
        (5, 'Eu, Robô', 'Isaac Asimov', 'Aleph', '10,99', 'Ficção', 'https://images-americanas.b2w.io/produtos/121163818/imagens/livro-eu-robo/121163818_1_large.jpg'),
        (6, 'A Psicologia das Cores', 'Eva Heller', 'Olhares', '10,99', 'Psicologia', 'https://livrariascuritiba.vteximg.com.br/arquivos/ids/1976471-1000-1000/lv476791_1.jpg?v=637619557663630000'),
        (7, 'O Corpo Fala', 'Pierre Weil / Roland Topankow', 'Vozes', '10,99', 'Psicologia', 'https://livrariascuritiba.vteximg.com.br/arquivos/ids/1845217-1000-1000/LV113872.jpg?v=636839372062770000'),
        (8, 'O Erro de Descartes', 'Antonio R Damasio', 'Cia das Letras', '10,99', 'Psicologia', 'https://livrariascuritiba.vteximg.com.br/arquivos/ids/1844755-1000-1000/LV319797.jpg?v=636838515401130000'),
        (9, 'Inteligência Visual', 'Amy E. Herman', 'Zahar', '10,99', 'Psicologia', 'https://images-na.ssl-images-amazon.com/images/I/514hnIWyd0L._SX346_BO1,204,203,200_.jpg'),
        (10, 'A Arte de Ler Mentes', 'Henrik Fexus', 'BestSeller', '10,99', 'Psicologia', 'https://images-na.ssl-images-amazon.com/images/I/51thluKlfoL._SX335_BO1,204,203,200_.jpg'),
        (11, 'O Príncipe', 'Nicollo Machiavelli', 'Pé da Letra', '10,99', 'Filosofia', 'https://images-na.ssl-images-amazon.com/images/I/41I2nopLitL._SX324_BO1,204,203,200_.jpg'),
        (12, 'Suma Teológica', 'São Tomás de Aquino', 'Livre', '10,99', 'Filosofia', 'https://images-na.ssl-images-amazon.com/images/I/61Rz1cDn60S._SX330_BO1,204,203,200_.jpg'),
        (13, 'O Sermão da Montanha', 'Santo Agostinho', 'É Realizações', '10,99', 'Filosofia', 'https://images-na.ssl-images-amazon.com/images/I/51lVe37YLnL._SX348_BO1,204,203,200_.jpg'),
        (14, 'O Mito da Caverna', 'Platão', 'Edipro', '10,99', 'Filosofia', 'https://images-na.ssl-images-amazon.com/images/I/51h-vfiCAQL._SX345_BO1,204,203,200_.jpg'),
        (15, 'A República', 'Platão', 'Lafonte', '10,99', 'Filosofia', 'https://images-na.ssl-images-amazon.com/images/I/51r-caT7odL._SX326_BO1,204,203,200_.jpg'),
        (16, 'O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 'Antofágica', '10,99', 'Clássicos', 'https://images-na.ssl-images-amazon.com/images/I/412852ovLsL._SX336_BO1,204,203,200_.jpg'),
        (17, 'Moby Dick', 'Herman Melville', 'Antofágica', '10,99', 'Clássicos', 'https://images-na.ssl-images-amazon.com/images/I/41led6D71VL._SX369_BO1,204,203,200_.jpg'),
        (18, 'Dom Casmurro', 'Machado de Assis', 'Principis', '10,99', 'Clássicos', 'https://images-na.ssl-images-amazon.com/images/I/41GeyYROqTL._SX346_BO1,204,203,200_.jpg'),
        (19, 'Memórias Póstumas de Brás Cubas', 'Machado de Assis', 'Principis', '10,99', 'Clássicos', 'https://images-na.ssl-images-amazon.com/images/I/51rEMmmweAL._SX346_BO1,204,203,200_.jpg'),
        (20, '1984', 'George Orwell', 'Via Leitura', '10,99', 'Clássicos', 'https://images-na.ssl-images-amazon.com/images/I/51UGhSv+F+L._SX328_BO1,204,203,200_.jpg' ),
        (21, 'Legend', 'Marie Lu', 'Rocco', '10,99', 'InfantoJuvenil', 'https://m.media-amazon.com/images/I/71LF+ZO9M8S._AC_UY218_.jpg'),
        (22, 'A Maldição do Titã', 'Rick Riordan', 'Intríseca', '10,99', 'InfantoJuvenil', 'https://images-na.ssl-images-amazon.com/images/I/41rs+C5KRIL._SY498_BO1,204,203,200_.jpg'),
        (23, 'O Herói Perdido', 'Rick Riordan', 'Intríseca', '10,99', 'InfantoJuvenil', 'https://images-na.ssl-images-amazon.com/images/I/51q24M7HYuL._SX346_BO1,204,203,200_.jpg'),
        (24, 'As Crônicas de Nárnia', 'C.S Lewis', 'WMF Martins Fontes', '10,99', 'InfantoJuvenil', 'https://images-na.ssl-images-amazon.com/images/I/51+2QAB7I+L._SX329_BO1,204,203,200_.jpg'),
        (25, 'Coraline', 'Neil Gaiman', 'Intríseca', '10,99', 'InfantoJuvenil', 'https://images-na.ssl-images-amazon.com/images/I/91DZobBc1BL.jpg')
        `;

const ADD_CLIENTES_DATA = `
        INSERT INTO CLIENTES (ID, NOME, EMAIL, NUMERO, CPF)
        VALUES 
            (1, 'Eugênio Oliveira', 'eugenio.oliveira@bol.com.br', '45918212000', '11439590071'),
            (2, 'Olívia Ribeiro', 'olivia.ribeiro@gmail.com', '09010191001', '11424173964'),
            (3, 'Mirtes Faria Lima', 'mirtes_fl@yahoo.com', '38314637009', '11723889761')
            `

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

db.serialize(()=> {
  criaTabelaLivros();  
  criaTabelaClientes()
  populaTabelaLivros();
  populaTabelaClientes();
})


