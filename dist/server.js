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
const fastify_1 = require("fastify");
const cors_1 = require("@fastify/cors");
const routes_1 = require("./routes");
const PORT = process.env.PORT || 3333;
const HOST = '0.0.0.0';
const app = (0, fastify_1.default)({ logger: true });
app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ error: error.message });
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    yield app.register(cors_1.default, {
        origin: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
    });
    yield app.register(routes_1.routes);
    try {
        yield app.listen({ port: parseInt(PORT.toString()), host: HOST });
        console.log(`Servidor rodando na porta ${PORT}`);
    }
    catch (error) {
        console.error("Erro ao iniciar o servidor:", error);
        process.exit(1);
    }
});
start();
