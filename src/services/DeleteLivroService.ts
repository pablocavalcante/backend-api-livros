import prismaClient from "../prisma";

interface DeleteLivroProps {
    id: string;
}

class DeleteLivroService{
    async execute({ id }: DeleteLivroProps){
        if(!id){
            throw new Error("Solicitação Inválida.")
        }

        const deleteLivro = await prismaClient.livros.findFirst({
            where: {
                id: id
            }
        })

        if(!deleteLivro){
            throw new Error("Livro não existe!")
        }

        await prismaClient.livros.delete({
            where: {
                id: deleteLivro.id
            }
        })

        // const livrosRestantes = await prismaClient.livros.findMany();

        return { message: `O Livro ${deleteLivro.titulo} foi deletado com sucesso!`}
    }
}

export { DeleteLivroService }