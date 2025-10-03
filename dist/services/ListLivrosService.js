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
exports.ListLivrosService = void 0;
const prisma_1 = require("../prisma");
const client_1 = require("@prisma/client");
class ListLivrosService {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const livros = yield prisma_1.default.livros.findMany();
            const ordem = {
                [client_1.StatusLeitura.EmLeitura]: 1,
                [client_1.StatusLeitura.PretendoLer]: 2,
                [client_1.StatusLeitura.Lido]: 3
            };
            const livrosOrdenados = livros.sort((a, b) => {
                const ordemA = ordem[a.status] || 99; // caso venha um status inesperado
                const ordemB = ordem[b.status] || 99;
                return ordemA - ordemB;
            });
            return livrosOrdenados;
        });
    }
}
exports.ListLivrosService = ListLivrosService;
