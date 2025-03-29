import { PrismaClient } from "@prisma/client";

// Prevent multiple instances of Prisma Client in development
declare const global: NodeJS.Global & { prisma?: PrismaClient };

const prisma = global.prisma || new PrismaClient();

global.prisma = prisma;

export default prisma;
