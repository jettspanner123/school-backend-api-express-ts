import {ZodError} from "zod";

import {ErrorCode, HttpStatusCode} from "../constants/http.constants";
import {AppError} from "../errors/app-error";
import {type ErrorResponse} from "../models/response/base-response.model";
import {type TypedErrorRequestHandler} from "../types/express.types";
import {ApiResponseFactory} from "../utils/api-response.util";

export class ErrorHandlerMiddleware {
    public static readonly handler: TypedErrorRequestHandler<ErrorResponse> = (
        error,
        _req,
        res,
        _next,
    ): void => {
        if (error instanceof AppError) {
            res
                .status(error.statusCode)
                .json(ApiResponseFactory.error(error.code, error.message, error.details));
            return;
        }

        if (error instanceof ZodError) {
            res.status(HttpStatusCode.BAD_REQUEST).json(
                ApiResponseFactory.error(
                    ErrorCode.VALIDATION_ERROR,
                    "Validation failed",
                    error.flatten(),
                ),
            );
            return;
        }

        const message: string =
            error instanceof Error ? error.message : "Internal server error";

        res
            .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
            .json(ApiResponseFactory.error(ErrorCode.INTERNAL_SERVER_ERROR, message));
    };

    private constructor() {
    }
}
