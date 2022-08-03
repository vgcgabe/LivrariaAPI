import  Express  from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { clienteController } from "./controller/clienteController.js";
import { departamentoController } from "./controller/departamentoController.js";
import { fornecedorController } from "./controller/fornecedorController.js"
import { livrosController } from "./controller/livrosController.js";
import { funcionariosController } from "./controller/funcionariosController.js";
import { bd } from "./infra/configDB.js";

const app = Express();
const port = process.env.PORT || 3000; 

app.use(bodyParser.json());
app.use(cors());
app.use(Express.json());

app.get('/', (req, res) => {
    res.send("Rota principal")
  });
  
clienteController(app, bd);
departamentoController(app, bd);
fornecedorController(app, bd);
funcionariosController(app, bd);
livrosController(app, bd);

app.listen(port, () => {
    console.log(`Listen to port ${port}`);
});



