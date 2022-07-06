import { DepartamentoModel } from "../model/DepartamentoModel.js";
import { DepartamentoDAO } from "../DAO/DepartamentoDAO.js";

export const departamentoController = (app, bd) => {
    const departamentoDAO = new DepartamentoDAO(bd);

    app.get('/departamento', (request, response) => {
        const data = async () => {
            try {
                const departamentos = await departamentoDAO.getDepartamentos();
                response.status(200).json(departamentos);

            } catch (error) {
                response.status(404).json(error);
            };
        };

        data();
    });

    app.get('/departamento/:id', (request, response) => {
        const data = async () => {
            try {
                const departamento = await departamentoDAO.getDepartamentosById(request.params.id);

                response.status(200).json(departamento);

            } catch (error) {
                response.status(404).json(error);
            };
        };

        data();
    });

    app.post('/departamento', (request, response) => {
        const body = request.body;

        const departamento = new DepartamentoModel(body.id, body.categoria, body.responsavel, body.qtdFuncionarios);

        const data = async () => {
            try {
                const departamentos = await departamentoDAO.postDepartamento(departamento);
                response.status(201).json(departamentos);
            } catch (error) {
                response.status(404).json(error);
            };
        };

        data();
    });

    app.delete('/departamento/:id', (request, response) => {
        const data = async () => {
            try {
                const departamento = await departamentoDAO().delete(request.params.id);

                response(201).json(departamento)
            } catch(error) {
                response.status(404).json(error)
            };
        };

        data();
    });

    app.put('/departamento/:id', (request, response) => {
        const body = request.body;
        const id = request.params.id;

        const data = async () => {
            try {
                const departamentoDadosAntigos = await departamentoDAO.getDepartamentosById(id);

                const departamentoAtualizado = new DepartamentoModel(
                    body.id || departamentoDadosAntigos[0].id,
                    body.categoria || departamentoDadosAntigos[0].categoria,
                    body.responsavel || departamentoDadosAntigos[0].responsavel,
                    body.qtdFuncionarios || departamentoDadosAntigos[0].qtdFuncionarios,

                );
                
                const arrayDepartamentoNovo = [
                    departamentoAtualizado.categoria,
                    departamentoAtualizado.responsavel,
                    departamentoAtualizado.qtdFuncionarios
                ];

                const departamento = await departamentoDAO.putDepartamento(arrayDepartamentoNovo);

                response.status(201).json(departamento);

            } catch (error) {
                response.status(404).json(error)
            };
        }; 

        data();
    });
};