import { FastifyRequest, FastifyReply} from 'fastify';
import { ListLivrosService } from '../services/ListLivrosService';
// import { StatusLeitura } from '../generated/prisma';

class ListLivrosController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        try {
            const listLivroService = new ListLivrosService();
            const livros = await listLivroService.execute();
            return reply.send(livros);
        } catch (error) {
            // Se o serviço lançar um erro, ele será capturado aqui
            console.error("Erro no controller:", error);
            // E nós enviamos uma resposta de erro para o cliente
            return reply.status(500).send({ message: "Erro ao listar livros." });
        }
    }
}

export { ListLivrosController }