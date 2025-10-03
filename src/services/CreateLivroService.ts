import prismaClient from "../prisma";
import { StatusLeitura } from "../generated/prisma";

interface CreateLivrosProps {
    titulo: string;
    autor: string;
    status: StatusLeitura
}

class CreateLivroService{
    async execute({titulo, autor, status}: CreateLivrosProps){
        
        if(!titulo || !autor){
            throw new Error("Preencha todos os campos!")
        }

        const novoLivro = await prismaClient.livros.create({
            data:{
                titulo,
                autor,
                status
            }
        })

        return novoLivro
    }
}

export { CreateLivroService };