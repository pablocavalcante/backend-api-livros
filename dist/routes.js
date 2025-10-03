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
exports.routes = routes;
const CreateLivroController_1 = require("./controllers/CreateLivroController");
const ListLivrosController_1 = require("./controllers/ListLivrosController");
const DeleteLivroController_1 = require("./controllers/DeleteLivroController");
const UpdateLivroController_1 = require("./controllers/UpdateLivroController");
function routes(fastify, options) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.get('/', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return { ok: true };
        }));
        fastify.get('/livros', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new ListLivrosController_1.ListLivrosController().handle(request, reply);
        }));
        fastify.post('/livros', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new CreateLivroController_1.CreateLivroController().handle(request, reply);
        }));
        fastify.put('/livro/:id', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new UpdateLivroController_1.UpdateLivroController().handle(request, reply);
        }));
        fastify.delete('/livro/:id', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new DeleteLivroController_1.DeleteLivroController().handle(request, reply);
        }));
    });
}
