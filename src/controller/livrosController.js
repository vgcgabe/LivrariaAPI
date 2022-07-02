import express from "express";


import { Livros } from "../model/LivrosModel.js";
import { LivrosDAO } from "../DAO/LivrosDAO.js";
const app = express ();
app.use(express.json());


export const livrosController = (app, bd)=>{

    const LivroDAO = new LivrosDAO(bd);

    app.get("/livros", (req, res)=>{
        const data = async()=>{
            try{
                const livros = await LivroDAO.listarLivros();
                res.status(200).json(livros)
            }catch(error){
                res.status(404).json(error)
            }
        }
        data();
    });

    app.get("/livros/id", (req, res)=>{
        
    });

    // ROTA PARA CADASTRAR LiVROS
    app.post('/livros', (req, res)=>{
        const body = req.body;
        const NovoLivro = new Livros(body.id, body.titulo, body.autor, body.editora, body.preço)
        
        const data = async()=>{
            try{
                console.log("vai cadastrar livro");
                const livros = await LivroDAO.CadastrarLivros(NovoLivro);
                console.log(livros);
                res.status(201).json(livros)
            }catch(error){
                console.log("erro");
                res.status(404).json(error)
            }
        }
        data();
      
    })

    app.put("/livros", (req, res)=>{
        
    });

    app.delete("/livros", (req, res)=>{
        
    });
}