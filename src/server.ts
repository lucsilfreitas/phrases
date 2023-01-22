import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';
import cors from 'cors';

dotenv.config();

const server = express();

server.use(cors()); //pode ser limitada para um site especifico

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

// teste de rota ping
server.use(apiRoutes)

//pagina nao encontrada
server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint não encontrado.'});
});

server.listen(process.env.PORT);