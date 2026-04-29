import { z } from "zod";

import { ApplicationConstants } from "../constants/application.constants";
import { type NodeEnvironment } from "../models/env.model";

const nodeEnvironmentValues: [NodeEnvironment, ...NodeEnvironment[]] = [
  "development",
  "production",
  "test",
];

export class EnvValidation {
  public static readonly environmentSchema = z
    .object({
      NODE_ENV: z.enum(nodeEnvironmentValues).default("development"),
      PORT: z
        .string()
        .optional()
        .transform((value: string | undefined): number => {
          if (value === undefined || value.trim() === "") {
            return ApplicationConstants.defaultPort;
          }

          return Number(value);
        })
        .pipe(z.number().int().positive("PORT must be a positive integer")),
    })
    .strict();

  private constructor() {}
}
