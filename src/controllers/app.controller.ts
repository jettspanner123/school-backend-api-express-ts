import { ApplicationConstants } from "../constants/application.constants";
import { HttpStatusCode } from "../constants/http.constants";
import { type AppInfoResponse } from "../models/response/app-info-response.model";
import { type SuccessResponse } from "../models/response/base-response.model";
import { AppService } from "../services/app.service";
import { type TypedRequestHandler } from "../types/express.types";
import { ApiResponseFactory } from "../utils/api-response.util";

export class AppController {
    public static readonly getAppInfo: TypedRequestHandler<SuccessResponse<AppInfoResponse>> = (_req, res): void => {
        const appInfoResponse: AppInfoResponse = AppService.instance.getAppInfo();

        res.status(HttpStatusCode.OK).json(ApiResponseFactory.success(ApplicationConstants.APP_READY_MESSAGE, appInfoResponse));
    };

    private constructor() {}
}
