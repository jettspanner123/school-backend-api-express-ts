import { PrismaClient } from "../database/generated/prisma/client";

export default class Database {
  public static instance = new Database();

  public getDatabaseInstance(config: any) {
    return new PrismaClient({ adapter: config });
  }
}
