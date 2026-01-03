import "dotenv/config";
import type { PrismaConfig } from "prisma";

const config: PrismaConfig = {
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL!,
  },
};

console.log("DATABASE_URL =", process.env.DATABASE_URL);


export default config;
