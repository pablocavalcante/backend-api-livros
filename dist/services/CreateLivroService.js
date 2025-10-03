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
exports.CreateLivroService = void 0;
const prisma_1 = require("../prisma");
class CreateLivroService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ titulo, autor, status }) {
            if (!titulo || !autor) {
                throw new Error("Preencha todos os campos!");
            }
            const novoLivro = yield prisma_1.default.livros.create({
                data: {
                    titulo,
                    autor,
                    status
                }
            });
            return novoLivro;
        });
    }
}
exports.CreateLivroService = CreateLivroService;
