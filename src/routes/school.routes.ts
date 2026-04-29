import { Router } from "express";

import { SchoolController } from "../controllers/school.controller";
import { ValidationMiddleware } from "../middleware/validation.middleware";
import { SchoolValidation } from "../validators/school.validator";

export class SchoolRoutes {
  public static readonly router: ReturnType<typeof Router> = SchoolRoutes.buildRouter();

  private constructor() {}

  private static buildRouter(): ReturnType<typeof Router> {
    const router: ReturnType<typeof Router> = Router();

    router.post(
      "/addSchool",
      ValidationMiddleware.validateBody(SchoolValidation.addSchoolRequestSchema),
      SchoolController.addSchool,
    );
    router.get(
      "/listSchools",
      ValidationMiddleware.validateQuery(SchoolValidation.listSchoolsRequestSchema),
      SchoolController.listSchools,
    );

    return router;
  }
}
