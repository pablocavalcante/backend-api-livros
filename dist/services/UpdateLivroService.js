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
exports.UpdateLivroService = void 0;
const prisma_1 = require("../prisma");
class UpdateLivroService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, titulo, autor, status }) {
            if (!id) {
                throw new Error("Informe um ID válido.");
            }
            const livroExiste = yield prisma_1.default.livros.findFirst({
                where: {
                    id: id
                }
            });
            if (!livroExiste) {
                throw new Error("Livro não encontrado.");
            }
            const livroAtualizado = yield prisma_1.default.livros.update({
                where: {
                    id: id
                },
                data: {
                    titulo: titulo,
                    autor: autor,
                    status: status
                }
            });
            return livroAtualizado;
        });
    }
}
exports.UpdateLivroService = UpdateLivroService;
