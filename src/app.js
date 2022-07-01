import  Express  from "express";
import { clienteController } from "./controller/clienteController.js";

const app = Express();
const port = 3000;

clienteController(app);

app.listen(port, () => {
    console.log(`Listen to port ${port}`);
});

