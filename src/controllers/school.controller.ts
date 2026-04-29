import { ApplicationConstants } from "../constants/application.constants";
import { ErrorCode, HttpStatusCode } from "../constants/http.constants";
import { type AddSchoolRequest } from "../models/request/add-school-request.model";
import { type ListSchoolsRequest } from "../models/request/list-schools-request.model";
import { type SchoolResponse } from "../models/response/school-response.model";
import { SchoolService } from "../services/school.service";
import { type TypedRequestHandler } from "../types/express.types";
import { ApiResponseFactory } from "../utils/api-response.util";
import { SchoolValidation } from "../validators/school.validator";

export class SchoolController {
    public static readonly addSchool: TypedRequestHandler<any, AddSchoolRequest> = async (req, res): Promise<void> => {
        try {
            const schoolResponse: SchoolResponse = await SchoolService.instance.addSchool(req.body);
            res.status(HttpStatusCode.CREATED).json(ApiResponseFactory.success(ApplicationConstants.schoolAddedMessage, schoolResponse));
        } catch (e: any) {
            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(ApiResponseFactory.error(ErrorCode.INTERNAL_SERVER_ERROR, e instanceof Error ? e.message : String(e)));
        }
    };

    public static readonly listSchools: TypedRequestHandler<any> = async (req, res): Promise<void> => {
        try {
            const listSchoolsRequest: ListSchoolsRequest = SchoolValidation.listSchoolsRequestSchema.parse(req.query);
            const schoolResponses: readonly SchoolResponse[] = await SchoolService.instance.listSchools(listSchoolsRequest);
            res.status(HttpStatusCode.OK).json(ApiResponseFactory.success(ApplicationConstants.schoolsListedMessage, schoolResponses));
        } catch (e: any) {
            let status = HttpStatusCode.INTERNAL_SERVER_ERROR;
            let code = ErrorCode.INTERNAL_SERVER_ERROR;
            let message = e instanceof Error ? e.message : String(e);

            if (e && typeof e === "object" && "name" in e && e.name === "ZodError") {
                status = HttpStatusCode.BAD_REQUEST;
                code = ErrorCode.VALIDATION_ERROR;
                message = e.errors ? JSON.stringify(e.errors) : message;
            }
            res.status(status).json(ApiResponseFactory.error(code, message));
        }
    };

    private constructor() {}
}
