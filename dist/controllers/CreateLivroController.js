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
exports.CreateLivroController = void 0;
const CreateLivroService_1 = require("../services/CreateLivroService");
class CreateLivroController {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, autor, status } = request.body;
            const livrosService = new CreateLivroService_1.CreateLivroService();
            const livros = yield livrosService.execute({ titulo, autor, status });
            reply.send(livros);
        });
    }
}
exports.CreateLivroController = CreateLivroController;
