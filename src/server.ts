import { type Server as HttpServer } from "node:http";

import { Application } from "./app";
import { EnvConfig } from "./config/env";

export class Server {
  private static readonly expressApplication = Application.expressApp;

  private constructor() {}

  public static start(): HttpServer {
    return Server.expressApplication.listen(EnvConfig.port, (): void => {
      console.log(
        `Server running on port ${EnvConfig.port} in ${EnvConfig.nodeEnvironment} mode`,
      );
    });
  }
}

Server.start();
