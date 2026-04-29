import express, { type Express } from "express";

import { ApplicationConstants } from "./constants/application.constants";
import { ErrorHandlerMiddleware } from "./middleware/error-handler";
import { NotFoundMiddleware } from "./middleware/not-found";
import { ApiRoutes } from "./routes";

export class Application {
  public static readonly expressApp: Express = Application.buildExpressApp();

  private constructor() {}

  private static buildExpressApp(): Express {
    const application: Express = express();

    Application.configureMiddleware(application);
    Application.configureRoutes(application);
    Application.configureErrorHandling(application);

    return application;
  }

  private static configureMiddleware(application: Express): void {
    application.use(express.json());
    application.use(express.urlencoded({ extended: true }));
  }

  private static configureRoutes(application: Express): void {
    application.use(ApplicationConstants.apiBasePath, ApiRoutes.router);
  }

  private static configureErrorHandling(application: Express): void {
    application.use(NotFoundMiddleware.handler);
    application.use(ErrorHandlerMiddleware.handler);
  }
}
