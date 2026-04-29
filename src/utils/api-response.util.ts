import { type ErrorResponse, type SuccessResponse } from "../models/response/base-response.model";

export class ApiResponseFactory {
    private constructor() {}

    public static error(code: string, message: string, details?: unknown): ErrorResponse {
        if (details === undefined) {
            return {
                success: false,
                message,
                errorCode: code,
            };
        }

        return {
            success: false,
            message,
            errorCode: code,
            details,
        };
    }

    public static success<TData>(message: string, data: TData): SuccessResponse<TData> {
        return {
            success: true,
            message,
            data,
        };
    }
}
