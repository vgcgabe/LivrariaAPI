//Funcionários - Victor Gabriel Camargo Guedes

import { Funcionario } from "../model/FuncionarioModel.js";
//import { ClienteDAO } from "../DAO/ClienteDAO.js";

export const funcionarios = (app) => {
    //ROTA PARA CONSULTAR FUNCIONARIOS SEM PARAMETRO
    app.get('/funcionarios', (req, res)=>{
        res.send("ROTA GET FUNCIONARIOS");
    })
    //ROTA PARA CONSULTAR FUNCIONARIOS POR PARAMETRO
    app.get('/funcionarios/:id', (req, res)=>{
        res.send("ROTA GET FUNCIONARIOS POR PARAMETRO");
    })
    //ROTA PARA CADASTRAR FUNCIONARIOS
    app.post('/funcionarios', (req, res)=>{
        res.send("ROTA POST FUNCIONARIOS");
    })
    //ROTA PARA ALTERAR   FUNCIONARIOS
    app.put('/funcionarios', (req, res)=>{
        res.send("ROTA PUT FUNCIONARIOS");
    })
    //ROTA PARA DELETAR   FUNCIONARIOS
    app.delete('/funcionarios', (req, res)=>{
        res.send("ROTA DELETE FUNCIONARIOS");
    })  
}
