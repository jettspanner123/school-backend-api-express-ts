import {ApplicationConstants} from "../constants/application.constants";
import {ErrorCode, HttpStatusCode} from "../constants/http.constants";
import {AppError} from "../errors/app-error";
import {type ErrorResponse} from "../models/base-response.model";
import {type TypedRequestHandler} from "../types/express.types";

export class NotFoundMiddleware {
    public static readonly handler: TypedRequestHandler<ErrorResponse> = (
        _req,
        _res,
        next,
    ): void => {
        next(
            new AppError({
                code: ErrorCode.RESOURCE_NOT_FOUND,
                message: ApplicationConstants.routeNotFoundMessage,
                statusCode: HttpStatusCode.NOT_FOUND,
            }),
        );
    };

    private constructor() {
    }
}
