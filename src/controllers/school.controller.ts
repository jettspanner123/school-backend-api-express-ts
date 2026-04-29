import {ApplicationConstants} from "../constants/application.constants";
import {HttpStatusCode} from "../constants/http.constants";
import {type AddSchoolRequest} from "../models/request/add-school-request.model";
import {type SuccessResponse} from "../models/response/base-response.model";
import {type ListSchoolsRequest} from "../models/request/list-schools-request.model";
import {type SchoolResponse} from "../models/response/school-response.model";
import {SchoolService} from "../services/school.service";
import {type TypedRequestHandler} from "../types/express.types";
import {ApiResponseFactory} from "../utils/api-response.util";
import {SchoolValidation} from "../validators/school.validator";

export class SchoolController {
    public static readonly addSchool: TypedRequestHandler<
        SuccessResponse<SchoolResponse>,
        AddSchoolRequest
    > = (req, res): void => {
        const schoolResponse: SchoolResponse = SchoolService.instance.addSchool(req.body);

        res.status(HttpStatusCode.CREATED).json(
            ApiResponseFactory.success(
                ApplicationConstants.schoolAddedMessage,
                schoolResponse,
            ),
        );
    };

    public static readonly listSchools: TypedRequestHandler<
        SuccessResponse<readonly SchoolResponse[]>
    > = (req, res): void => {
        const listSchoolsRequest: ListSchoolsRequest =
            SchoolValidation.listSchoolsRequestSchema.parse(req.query);
        const schoolResponses: readonly SchoolResponse[] =
            SchoolService.instance.listSchools(listSchoolsRequest);

        res.status(HttpStatusCode.OK).json(
            ApiResponseFactory.success(
                ApplicationConstants.schoolsListedMessage,
                schoolResponses,
            ),
        );
    };

    private constructor() {
    }
}
