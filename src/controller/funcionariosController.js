//Funcionários - Victor Gabriel Camargo Guedes

import { Funcionario } from "../model/FuncionarioModel.js";
//import { ClienteDAO } from "../DAO/ClienteDAO.js";

export const funcionariosController = (app, bd) => {
    //ROTA PARA CONSULTAR FUNCIONARIOS SEM PARAMETRO
    app.get('/funcionarios', (req, res)=>{
        //res.send("ROTA GET FUNCIONARIOS");
        bd.all(`SELECT * FROM FUNCIONARIOS`, (error, result) => {
            if(error) res.status(404).json(error);
            else res.status(200).json(result);
        })
    })

    //ROTA PARA CONSULTAR FUNCIONARIOS POR PARAMETRO
    app.get('/funcionarios/:id', (req, res)=>{
        //res.send("ROTA GET FUNCIONARIOS POR PARAMETRO");
        bd.all(`SELECT * FROM FUNCIONARIOS WHERE id = ${req.params.id}`, (error, result) => {
            if(error) res.status(404).json(error);
            else res.status(200).json(result);
        })
    })

    //ROTA PARA CADASTRAR FUNCIONARIOS
    app.post('/funcionarios', (req, res)=>{
        //res.send("ROTA POST FUNCIONARIOS");
        body = req.body;
        const NovoFuncionario = new Funcionario(body.nome, body.id, body.cpf, body.idade, body.email);
        console.log(NovoFuncionario);

        bd.run(`INSERT INTO FUNCIONARIOS (nome, id, cpf, idade, email)
                VALUES (?, ?, ?, ?, ?)`,
                [NovoFuncionario.nome, NovoFuncionario.id, NovoFuncionario.cpf, NovoFuncionario.idade, NovoFuncionario.email],
        (error) => {
            if(error) res.status(404).json(error);
            else res.status(200).json('DEU CERTO INSERIR FUNCIONARIO');
        });
    })

    //ROTA PARA ALTERAR   FUNCIONARIOS
    app.put('/funcionarios/:id', (req, res)=>{
        //res.send("ROTA PUT FUNCIONARIOS");
        body = req.body;
        id = req.params.id;
        const FuncionarioAtualizado = new Funcionario(body.nome, body.id, body.cpf, body.idade, body.email);
        console.log(FuncionarioAtualizado);

        bd.run(
        `UPDATE LIVROS 
        SET nome = ?, id = ?, cpf = ?, idade = ?, email = ?`,
        [FuncionarioAtualizado.nome, FuncionarioAtualizado.id, FuncionarioAtualizado.cpf, FuncionarioAtualizado.idade,FuncionarioAtualizado.email],
        (error) => {
            if(error) res.status(404).json(error);
            else res.status(200).json('DEU CERTO ALTERAR FUNCIONARIO');
        });
    })

    //ROTA PARA DELETAR   FUNCIONARIOS
    app.delete('/funcionarios/:id', (req, res)=>{
        //res.send("ROTA DELETE FUNCIONARIOS");
        bd.run(`DELETE FROM FUNCIONARIOS WHERE id = ${req.params.id}`, (error)=> {
            if(error) res.status(404).json(error);
            else res.status(200).json('DEU CERTO DELETAR FUNCIONARIO');
        });
    })  
}
