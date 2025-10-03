import prismaClient from "../prisma";

class ListLivrosService {
    async execute(){

        const livros = await prismaClient.livros.findMany()

        return livros;

    }
}

export { ListLivrosService }