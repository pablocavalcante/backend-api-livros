import { FastifyRequest, FastifyReply} from 'fastify';
import { ListLivrosService } from '../services/ListLivrosService';
// import { StatusLeitura } from '../generated/prisma';

class ListLivrosController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listLivroService = new ListLivrosService();

        const livros = await listLivroService.execute();

        reply.send(livros);
    }
}

export { ListLivrosController }