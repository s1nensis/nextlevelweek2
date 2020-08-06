import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

// GET: buscar ou listar uma informação
// POST: criar alguma nova informação
// PUT: atualizar uma informação
// DELETE: deletar uma informação existente

// Corpo (request body): Dados para criação / atualização de um registro
// Route params: Identificar qual recurso eu quero atualizar ou deletar
// Query params: Paginação, filtro, ordenação
