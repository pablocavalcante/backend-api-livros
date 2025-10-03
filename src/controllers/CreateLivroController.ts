import { FastifyRequest, FastifyReply} from 'fastify'
import { CreateLivroService } from '../services/CreateLivroService'
import { StatusLeitura } from '../generated/prisma'

class CreateLivroController{
    async handle(request: FastifyRequest, reply: FastifyReply){

        const { titulo, autor, status} = request.body as {titulo: string, autor: string, status:StatusLeitura};

        const livrosService = new CreateLivroService()
        const livros = await livrosService.execute({titulo, autor, status});

        reply.send(livros)

    }
}


export { CreateLivroController }