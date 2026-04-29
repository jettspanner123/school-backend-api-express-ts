export interface BaseResponse {
    readonly success: boolean;
    readonly message: string;
}

export interface SuccessResponse<TData> extends BaseResponse {
    readonly success: true;
    readonly data: TData;
}

export interface ErrorResponse extends BaseResponse {
    readonly success: false;
    readonly errorCode: string;
    readonly details?: unknown;
}
