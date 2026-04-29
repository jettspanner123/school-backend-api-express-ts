import {type AddSchoolRequest} from "../models/request/add-school-request.model";
import {type ListSchoolsRequest} from "../models/request/list-schools-request.model";
import {type SchoolResponse} from "../models/response/school-response.model";
import Database from "../database/database";
import PrismaDatabaseConfig from "../config/pg-config.prisma.config";
import {insertSchoolToDatabase} from "../database/generated/prisma/sql";
import SchoolServiceHelper from "../helpers/school-service.helper";

export class SchoolService {
    public static readonly instance: SchoolService = new SchoolService();
    public readonly database = Database.instance.getDatabaseInstance(
        PrismaDatabaseConfig.instance.getDatabaseConfig(),
    );

    private readonly schoolsTable: SchoolResponse[] = [];

    private constructor() {
    }


    public async addSchool(payload: AddSchoolRequest): Promise<SchoolResponse> {
        const results = await this.database.$queryRawTyped(
            insertSchoolToDatabase(
                payload.name,
                payload.address,
                payload.longitude,
                payload.latitude,
            ),
        );

        const [addedSchool] = SchoolServiceHelper.toSchoolResponseList(results);
        return addedSchool!;
    }

    public listSchools(payload: ListSchoolsRequest): readonly SchoolResponse[] {
        return [...this.schoolsTable].sort(
            (leftSchool: SchoolResponse, rightSchool: SchoolResponse): number =>
                SchoolServiceHelper.calculateDistanceInKilometers(
                    payload.latitude,
                    payload.longitude,
                    leftSchool.latitude,
                    leftSchool.longitude,
                ) -
                SchoolServiceHelper.calculateDistanceInKilometers(
                    payload.latitude,
                    payload.longitude,
                    rightSchool.latitude,
                    rightSchool.longitude,
                ),
        );
    }


}
