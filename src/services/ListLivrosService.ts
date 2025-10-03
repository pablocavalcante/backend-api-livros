import prismaClient from "../prisma";

interface Livro{
_id: { $oid: string };
  titulo: string;
  autor: string;
  status: 'EmLeitura' | 'PretendoLer' | 'Lido';
}

class ListLivrosService {
    async execute(){

        const pipeline = [
          {
            $addFields: {
              ordem: {
                $switch: {
                  branches: [
                    { case: { $eq: ['$status', 'EmLeitura'] }, then: 1 },
                    { case: { $eq: ['$status', 'PretendoLer'] }, then: 2 },
                    { case: { $eq: ['$status', 'Lido'] }, then: 3 },
                  ],
                  default: 99,
                },
              },
            },
          },
          { $sort: { ordem: 1 } },
          { $project: { ordem: 0 } },
        ];

        const livros = await prismaClient.livros.aggregateRaw({
          pipeline: pipeline,
        }) as unknown as Livro[]; // 2. Fazemos a asserção do tipo aqui

        return livros;

    }
}

export { ListLivrosService }