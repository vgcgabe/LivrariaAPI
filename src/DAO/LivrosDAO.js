 export class LivrosDAO{
    constructor(bd){
        this.bd = bd;
    }
    listarLivros(){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM LIVROS`, (error, resultado)=>{
                if(error) reject(`Erro ao selecionar tabela: ${error}`);
                else resolve(resultado)
            })
        })
    }
    listarLivrosID(id){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM LIVROS WHERE id = ${id}`, (error, resultado)=>{
                if(error) reject(error);
                else resolve(resultado)
            })
        })
    }
    CadastrarLivros(Livro){
        console.log("DAO LIVRO");
        console.log(Livro);
        return new Promise((resolve, reject) => {
            this.bd.run(
                `INSERT INTO LIVROS (id,titulo, autor, editora, preco)
                 VALUES (?, ?, ?, ?,?) `,
                 [Livro.id, Livro.titulo, Livro.autor, Livro.editora, Livro.preço],
            (error)=>{
                if(error) reject(error);
                else resolve('DEU CERTO INSERIR LIVRO')
            })
        })
    }
    AlterarLivro(LivroAtualizado){
        return new Promise((resolve, reject) => {
            this.bd.run(`
            UPDATE LIVROS 
            SET titulo = ?, autor = ? , editora = ?, preço = ?  WHERE id = ?`, LivroAtualizado,
             (error)=>{
                if(error) reject(error);
                else resolve('DEU CERTO ALTERAR LIVRO')
            })
        })
    }
    DeletarLivro(id){
        return new Promise((resolve, reject) => {
            this.bd.run(`DELETE FROM LIVROS WHERE id = ${id} `, (error)=>{
                if(error) reject(error);
                else resolve("DEU CERTO DELETAR LIVRO")
    
            })
         })
    }
    
}
