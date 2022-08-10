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

    app.get('/livros/:id', (req, res)=>{
        const data = async()=>{
            try{
                const livros = await LivroDAO.listarLivrosID(req.params.id);
                res.status(200).json(livros)
            }catch(error){
                res.status(404).json(error)
            }
        }
        data();
      
    })

    app.post('/livros', (req, res)=>{
        const body = req.body;
        const NovoLivro = new Livros(body.id, body.titulo, body.autor, body.editora, body.preco, body.categoria, body.img)
        
        const data = async()=>{
            try{
                console.log("vai cadastrar livro");
                const livros = await LivroDAO.CadastrarLivros(NovoLivro);
                console.log(livros);
                res.status(201).json(livros)
            }catch(error){
                console.log(error);
                res.status(404).json(error)
            }
        }
        data();
      
    });

    app.put('/livros/:id', (req, res)=>{
        const body = req.body;
        const id = req.params.id;
            const data = async()=>{
                try{
                    const LivroDadosAntigo= await LivroDAO.listarLivrosID(id);

                    console.log("LivroDadosAntigo");
                    console.log(LivroDadosAntigo);


                    const LivroAtualizado = new 
                        Livros(
                                body.id || LivroDadosAntigo[0].id,
                                body.titulo || LivroDadosAntigo[0].titulo, 
                                body.autor || LivroDadosAntigo[0].autor, 
                                body.editora || LivroDadosAntigo[0].editora,
                                body.preco || LivroDadosAntigo[0].preco,
                                body.categoria || LivroDadosAntigo[0].categoria,
                                body.img || LivroDadosAntigo[0].img
                                )

                    console.log("LivroAtualizado");
                    console.log(LivroAtualizado);

                    const parametro = 
                    [LivroAtualizado.titulo, 
                        LivroAtualizado.autor, 
                        LivroAtualizado.editora, 
                        LivroAtualizado.preco,
                        LivroAtualizado.categoria,
                        LivroAtualizado.img,
                        id]
                        console.log(parametro)
                    const livros = await LivroDAO.AlterarLivro(parametro);
                    res.status(201).json(livros)
                }catch(error){
                    res.status(404).json(error)
                }
            }
            data();   
        
    });

    app.delete('/livros/:id', (req, res)=>{
        const data = async()=>{
            try{
                const livros = await LivroDAO.DeletarLivro(req.params.id); 
                
                res.status(201).json(livros)
            }catch(error){
                res.status(404).json(error)
            }
        }
        data();
    })
}