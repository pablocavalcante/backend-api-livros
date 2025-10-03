import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { CreateLivroController } from './controllers/CreateLivroController'
import { ListLivrosController } from './controllers/ListLivrosController'
import { DeleteLivroController } from './controllers/DeleteLivroController'
import { UpdateLivroController } from './controllers/UpdateLivroController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions ){
    fastify.get('/', async (request: FastifyRequest, reply: FastifyReply ) => {
        return { ok: true}
    })

    fastify.get('/livros', async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListLivrosController().handle(request, reply)
    })
    
    fastify.post('/livros', async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateLivroController().handle(request, reply)
    })

    fastify.put('/livro/:id', async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateLivroController().handle(request, reply)
    })

    fastify.delete('/livro/:id', async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteLivroController().handle(request, reply)
    })
}