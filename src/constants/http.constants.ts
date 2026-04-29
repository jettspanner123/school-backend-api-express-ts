export class HttpStatusCode {
    public static readonly BAD_REQUEST = 400;
    public static readonly CREATED = 201;
    public static readonly INTERNAL_SERVER_ERROR = 500;
    public static readonly NOT_FOUND = 404;
    public static readonly OK = 200;

    private constructor() {
    }
}

export class ErrorCode {
    public static readonly INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR";
    public static readonly RESOURCE_NOT_FOUND = "RESOURCE_NOT_FOUND";
    public static readonly VALIDATION_ERROR = "VALIDATION_ERROR";

    private constructor() {
    }
}
