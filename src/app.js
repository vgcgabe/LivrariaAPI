import  Express  from "express";
import cors from "cors";
import bodyParser from "body-parser";

//import { clienteController } from "./controller/clienteController.js";
//import { departamentoController } from "./controller/departamentoController.js";
//import { fornecedorController } from "./controller/fornecedorController.js"
import { funcionarios } from "./controller/funcionariosController.js";
//import { livrosController } from "./controller/livrosController.js";

//import { bd } from "./infra/configDB.js";

const app = Express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// clienteController(app, bd);
// departamentoController(app, bd);
// fornecedorController(app, bd);
funcionarios(app);
// livrosController(app, bd);

// app.listen(port, () => {
//     console.log(`Listen to port ${port}: http://localhost:3000/cliente`);
// });

app.get('/', (req, res) => {
    res.send("Rota principal")
  });
  
  app.listen(port, ()=> {
    console.log(`Rodando na porta ${port}`)
  });