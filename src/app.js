import  express  from "express";
//import { clienteController } from "./controller/clienteController.js";
import { livrosController } from "./controller/livrosController.js";
import { bd } from "./infra/configDB.js";


const app = express ();
app.use(express.json())

const port = 3000;


livrosController(app, bd);

app.listen(port, () => {
    console.log(`Listen to port ${port}`);
});

