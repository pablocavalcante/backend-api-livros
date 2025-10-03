import { FastifyRequest, FastifyReply} from 'fastify';
import { UpdateLivroService } from '../services/UpdateLivroService';
import { StatusLeitura } from '@prisma/client';

class UpdateLivroController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.params as { id: string}
        const { titulo, autor, status} = request.body as { titulo: string, autor: string , status?: StatusLeitura}
        
        const updateLivroService = new UpdateLivroService();

        const livroAtualizado = await updateLivroService.execute({ id, titulo, autor, status });

        reply.send(livroAtualizado);
    }
}

export { UpdateLivroController }