import { EnvConfig } from "../config/env";
import { type AppInfoResponse } from "../models/response/app-info-response.model";

export class AppService {
  public static readonly instance: AppService = new AppService();

  public getAppInfo(): AppInfoResponse {
    return {
      environment: EnvConfig.nodeEnvironment,
    };
  }

  private constructor() {}
}
