import prismaClient from "../prisma";
import { StatusLeitura } from "@prisma/client";

class ListLivrosService {
    async execute() {

        const livros = await prismaClient.livros.findMany()

        const ordem = {
            [StatusLeitura.EmLeitura]: 1,
            [StatusLeitura.PretendoLer]: 2,
            [StatusLeitura.Lido]: 3
        };

        const livrosOrdenados = livros.sort((a, b) => {
            const ordemA = ordem[a.status] || 99; // caso venha um status inesperado
            const ordemB = ordem[b.status] || 99;
            return ordemA - ordemB;
        });

        return livrosOrdenados;

    }
}

export { ListLivrosService }