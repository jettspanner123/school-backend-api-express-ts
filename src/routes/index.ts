import { Router } from "express";

import { AppController } from "../controllers/app.controller";
import { SchoolRoutes } from "./school.routes";

export class ApiRoutes {
  public static readonly router: ReturnType<typeof Router> = ApiRoutes.buildRouter();

  private constructor() {}

  private static buildRouter(): ReturnType<typeof Router> {
    const router: ReturnType<typeof Router> = Router();

    router.use(SchoolRoutes.router);
    router.get("/", AppController.getAppInfo);

    return router;
  }
}
