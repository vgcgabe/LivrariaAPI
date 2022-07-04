import  Express  from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { clienteController } from "./controller/clienteController.js";
import { bd } from "./infra/configDB.js";

const app = Express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

clienteController(app, bd);


app.listen(port, () => {
    console.log(`Listen to port ${port}: http://localhost:3000/cliente`);
});

