import Fastify, { fastify } from 'fastify';
import  cors  from '@fastify/cors'
import { routes } from './routes';

const PORT = process.env.PORT || 3333;
const HOST = '0.0.0.0';

const app = Fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ error: error.message})
})

const start = async () => {

    await app.register(cors, {
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
    });
    await app.register(routes);

    try {
        await app.listen({ port: parseInt(PORT.toString()), host: HOST});
        console.log(`Servidor rodando em http://${HOST}:${PORT}`);
    } catch (error) {
        console.error("Erro ao iniciar o servidor:", error);
        process.exit(1);
    }
}

start();