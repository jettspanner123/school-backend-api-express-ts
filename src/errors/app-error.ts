import { ErrorCode, HttpStatusCode } from "../constants/http.constants";

export interface AppErrorOptions {
    readonly code?: string;
    readonly details?: unknown;
    readonly message: string;
    readonly statusCode?: number;
}

export class AppError extends Error {
    public readonly code: string;
    public readonly details?: unknown;
    public readonly statusCode: number;

    public constructor(options: AppErrorOptions) {
        super(options.message);

        this.name = "AppError";
        this.code = options.code ?? ErrorCode.INTERNAL_SERVER_ERROR;
        if (options.details !== undefined) {
            this.details = options.details;
        }
        this.statusCode = options.statusCode ?? HttpStatusCode.INTERNAL_SERVER_ERROR;
    }
}
