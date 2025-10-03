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
exports.UpdateLivroController = void 0;
const UpdateLivroService_1 = require("../services/UpdateLivroService");
class UpdateLivroController {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const { titulo, autor, status } = request.body;
            const updateLivroService = new UpdateLivroService_1.UpdateLivroService();
            const livroAtualizado = yield updateLivroService.execute({ id, titulo, autor, status });
            reply.send(livroAtualizado);
        });
    }
}
exports.UpdateLivroController = UpdateLivroController;
