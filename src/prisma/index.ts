// Conexão com o banco

import { PrismaClient } from '../generated/prisma';

const prismaClient = new PrismaClient();

export default prismaClient;