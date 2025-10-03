"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLivroService = void 0;
const prisma_1 = require("../prisma");
class DeleteLivroService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id }) {
            if (!id) {
                throw new Error("Solicitação Inválida.");
            }
            const deleteLivro = yield prisma_1.default.livros.findFirst({
                where: {
                    id: id
                }
            });
            if (!deleteLivro) {
                throw new Error("Livro não existe!");
            }
            yield prisma_1.default.livros.delete({
                where: {
                    id: deleteLivro.id
                }
            });
            // const livrosRestantes = await prismaClient.livros.findMany();
            return { message: `O Livro ${deleteLivro.titulo} foi deletado com sucesso!` };
        });
    }
}
exports.DeleteLivroService = DeleteLivroService;
