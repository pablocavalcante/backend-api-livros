import { FastifyRequest, FastifyReply} from 'fastify';
import { DeleteLivroService } from '../services/DeleteLivroService'


class DeleteLivroController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.params as { id: string};

        const livroService = new DeleteLivroService();
        const livro = await livroService.execute({ id });

        reply.send(livro);
    }
}

export { DeleteLivroController }