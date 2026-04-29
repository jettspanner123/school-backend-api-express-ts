import {type RequestHandler} from "express";
import {type ParamsDictionary} from "express-serve-static-core";
import {type ParsedQs} from "qs";
import {type ZodTypeAny, z} from "zod";

import {ApplicationConstants} from "../constants/application.constants";
import {ErrorCode, HttpStatusCode} from "../constants/http.constants";
import {AppError} from "../errors/app-error";
import {type EmptyObject} from "../types/express.types";

export class ValidationMiddleware {
    private constructor() {
    }

    public static validateBody<TSchema extends ZodTypeAny>(
        schema: TSchema,
    ): RequestHandler<ParamsDictionary, unknown, z.infer<TSchema>, ParsedQs> {
        return (req, _res, next): void => {
            const parsedBody = schema.safeParse(req.body);

            if (!parsedBody.success) {
                next(
                    new AppError({
                        code: ErrorCode.VALIDATION_ERROR,
                        details: parsedBody.error.flatten(),
                        message: ApplicationConstants.requestBodyValidationFailedMessage,
                        statusCode: HttpStatusCode.BAD_REQUEST,
                    }),
                );
                return;
            }

            req.body = parsedBody.data;
            next();
        };
    }

    public static validateQuery<TSchema extends ZodTypeAny>(
        schema: TSchema,
    ): RequestHandler<ParamsDictionary, unknown, EmptyObject, ParsedQs> {
        return (req, _res, next): void => {
            const parsedQuery = schema.safeParse(req.query);

            if (!parsedQuery.success) {
                next(
                    new AppError({
                        code: ErrorCode.VALIDATION_ERROR,
                        details: parsedQuery.error.flatten(),
                        message: ApplicationConstants.requestQueryValidationFailedMessage,
                        statusCode: HttpStatusCode.BAD_REQUEST,
                    }),
                );
                return;
            }

            next();
        };
    }
}
