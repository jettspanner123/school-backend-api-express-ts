import { PrismaClient } from "../database/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import EnvValidator from "../helpers/env-validator.helper";

export default class PrismaDatabaseConfig {
    public static instance = new PrismaDatabaseConfig();

    public getDatabaseConfig() {
        const connectionString = EnvValidator.getEnv("DATABASE_URL");
        const pool = new Pool({ connectionString });
        const adapter = new PrismaPg(pool);
        return adapter;
    }
}
