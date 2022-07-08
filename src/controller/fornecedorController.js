import { FornecedorModel } from "../model/FornecedorModel.js";
import { FornecedorDAO } from "../DAO/FornecedorDAO.js";

export const fornecedorController = (app, bd) => {
    const fornecedorDAO = new FornecedorDAO(bd);

    app.get('/fornecedor', (request, response) => {
        const data = async () => {
            try {
                const fornecedores = await fornecedorDAO.getFornecedor();
                response.status(200).json(fornecedores);

            } catch (error) {
                response.status(404).json(error);
            };
        };

        data();
    });

    app.get('/fornecedor/:id', (request, response) => {
        const data = async () => {
            try {
                const fornecedor = await fornecedorDAO.getFornecedoresById(request.params.id);

                response.status(200).json(fornecedor);

            } catch (error) {
                response.status(404).json(error.message);
            };
        };

        data();
    });

    app.post('/fornecedor', (request, response) => {
        const body = request.body;

        const fornecedor = new FornecedorModel(body.id, body.nome, body.cnpj, body.endereco);

        const data = async () => {
            try {
                const fornecedores = await fornecedorDAO.postFornecedor(fornecedor);
                response.status(201).json(fornecedores);
                

                
            } catch (error) {
                console.log(error.message)
                response.status(404).json(error.message);
            };
        };

        data();
    });

    app.delete('/fornecedor/:id', (request, response) => {
        const data = async () => {
            try {
                const fornecedor = await fornecedorDAO.deleteFornecedor(request.params.id);

                response.status(201).json(fornecedor);

            } catch(error) {
                response.status(404).json(error.message);
            };
        };

        data();
    });

    app.put('/fornecedor/:id', (request, response) => {
        const body = request.body;
        const id = request.params.id;

        const data = async () => {

            try {
                const fornecedorDadosAntigos = await fornecedorDAO.getFornecedoresById(id);
                
                const fornecedorAtualizado = new FornecedorModel (

                    body.id        || fornecedorDadosAntigos[0].id,
                    body.nome      || fornecedorDadosAntigos[0].nome,
                    body.cnpj      || fornecedorDadosAntigos[0].cnpj,
                    body.endereco  || fornecedorDadosAntigos[0].endereco,
            
                );

                const arrayFornecedorNovo = [
                    
                    fornecedorAtualizado.nome,
                    fornecedorAtualizado.endereco,
                    fornecedorAtualizado.cnpj,
                    id

                ];

                const fornecedor = await fornecedorDAO.putCliente(arrayFornecedorNovo);

                response.status(201).json(fornecedor);

            } catch (error) {
                response.status(404).json(error.message)
            };
        }; 

        data();
    });
};