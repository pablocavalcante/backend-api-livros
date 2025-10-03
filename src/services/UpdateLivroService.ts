import prismaClient from "../prisma"
import { StatusLeitura } from "@prisma/client";

interface UpdateLivroProps {
    id: string;
    titulo?: string;
    autor?: string;
    status?: StatusLeitura;
}

class UpdateLivroService {
    async execute({ id, titulo, autor, status }: UpdateLivroProps){
        if(!id){
            throw new Error("Informe um ID válido.")
        }

        const livroExiste = await prismaClient.livros.findFirst({
            where: {
                id: id
            }
        })

        if(!livroExiste){
            throw new Error("Livro não encontrado.")
        }

        const livroAtualizado = await prismaClient.livros.update({
            where: {
                id: id
            },
            data: {
                titulo: titulo,
                autor: autor,
                status: status
            }
        })

        return livroAtualizado;
    }
}

export { UpdateLivroService }