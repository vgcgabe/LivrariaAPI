import { ClienteModel } from "../model/ClienteModel.js";
import { ClienteDAO } from "../DAO/ClienteDAO.js";

export const clienteController = (app, bd) => {

    const clienteDAO = new ClienteDAO(bd);

    app.get('/cliente', (request, response) => {
        const data = async () => {
            try {
                const clientes = await clienteDAO.getClientes();
                response.status(200).json(clientes);

            } catch (error) {
                response.status(404).json(error);
            };
        };

        data();
    });


    app.get('/cliente/:id', (request, response) => {
        const data = async () => {
            try {
                const cliente = await clienteDAO.getClientesById(request.params.id);

                response.status(200).json(cliente);

            } catch (error) {
                response.status(404).json(error);
            };
        };

        data();
    });

    
    app.post('/cliente', (request, response) => {

        const body = request.body;
        
        const cliente = new ClienteModel(body.id, body.nome, body.email, body.numero, body.cpf);
        
        const data = async () => {

            try {
                const clientes = await clienteDAO.postCliente(cliente);
                response.status(201).json(clientes);

            } catch (error) {
                response.status(404).json(error);
            };
        };

        data();
    });

    app.delete('/cliente/:id', (request, response) => {
        const data = async () => {
            try {
                const cliente = await clienteDAO.deleteCliente(request.params.id);

                response.status(201).json(cliente);

            } catch(error) {
                response.status(404).json(error.message);
            };
        };

        data();
    });

    app.put('/cliente/:id', (request, response) => {
        const body = request.body;
        const id = request.params.id;

        const data = async () => {

            try {
                const clienteDadosAntigos = await clienteDAO.getClientesById(id);
                
                const clienteAtualizado = new ClienteModel (

                    body.id     || clienteDadosAntigos[0].ID,
                    body.nome   || clienteDadosAntigos[0].NOME,
                    body.email  || clienteDadosAntigos[0].EMAIL,
                    body.numero || clienteDadosAntigos[0].NUMERO,
                    body.cpf    || clienteDadosAntigos[0].CPF

                );

                console.log(clienteAtualizado);
                
                const arrayClienteNovo = [
                    
                    clienteAtualizado.nome,
                    clienteAtualizado.cpf,
                    clienteAtualizado.email,
                    clienteAtualizado.numero,
                    id

                ];

                const cliente = await clienteDAO.putCliente(arrayClienteNovo);

                response.status(201).json(cliente);

            } catch (error) {
                response.status(404).json(error.message)
            };
        }; 

        data();
    });
};