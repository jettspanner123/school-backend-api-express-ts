import dotenv from "dotenv";

import { type EnvironmentVariables } from "../models/env.model";
import { EnvValidation } from "../validators/env.validator";

dotenv.config();

const rawEnvironmentVariables: Record<keyof EnvironmentVariables, string | undefined> = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
};

const parsedEnvironmentVariables: EnvironmentVariables = EnvValidation.environmentSchema.parse(rawEnvironmentVariables);

export class EnvConfig {
    public static readonly values: EnvironmentVariables = parsedEnvironmentVariables;
    public static readonly nodeEnvironment: EnvironmentVariables["NODE_ENV"] = EnvConfig.values.NODE_ENV;
    public static readonly port: EnvironmentVariables["PORT"] = EnvConfig.values.PORT;

    private constructor() {}
}
