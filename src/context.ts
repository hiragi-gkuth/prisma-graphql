import { PrismaClient } from "@prisma/client";
import { Request } from "koa";

export interface Context {
  prisma: PrismaClient
  request: Request
}

export const prisma = new PrismaClient();
