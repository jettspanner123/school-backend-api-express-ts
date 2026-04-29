import { type AddSchoolRequest } from "../models/request/add-school-request.model";
import { type ListSchoolsRequest } from "../models/request/list-schools-request.model";
import { type SchoolResponse } from "../models/response/school-response.model";
import Database from "../database/database";
import PrismaDatabaseConfig from "../config/pg-config.prisma.config";

export class SchoolService {
  public static readonly instance: SchoolService = new SchoolService();
  public readonly database = Database.instance.getDatabaseInstance(
    PrismaDatabaseConfig.instance.getDatabaseConfig(),
  );

  private nextSchoolId = 1;

  // Temporary in-memory table until a database layer is introduced.
  private readonly schoolsTable: SchoolResponse[] = [];

  private constructor() {}

  public addSchool(payload: AddSchoolRequest): SchoolResponse {
    const schoolResponse: SchoolResponse = {
      address: payload.address,
      id: this.nextSchoolId,
      latitude: payload.latitude,
      longitude: payload.longitude,
      name: payload.name,
    };

    this.schoolsTable.push(schoolResponse);
    this.nextSchoolId += 1;

    return schoolResponse;
  }

  public listSchools(payload: ListSchoolsRequest): readonly SchoolResponse[] {
    return [...this.schoolsTable].sort(
      (leftSchool: SchoolResponse, rightSchool: SchoolResponse): number =>
        this.calculateDistanceInKilometers(
          payload.latitude,
          payload.longitude,
          leftSchool.latitude,
          leftSchool.longitude,
        ) -
        this.calculateDistanceInKilometers(
          payload.latitude,
          payload.longitude,
          rightSchool.latitude,
          rightSchool.longitude,
        ),
    );
  }

  private calculateDistanceInKilometers(
    userLatitude: number,
    userLongitude: number,
    schoolLatitude: number,
    schoolLongitude: number,
  ): number {
    const earthRadiusInKilometers = 6371;
    const latitudeDifferenceInRadians = this.convertDegreesToRadians(
      schoolLatitude - userLatitude,
    );
    const longitudeDifferenceInRadians = this.convertDegreesToRadians(
      schoolLongitude - userLongitude,
    );
    const userLatitudeInRadians = this.convertDegreesToRadians(userLatitude);
    const schoolLatitudeInRadians =
      this.convertDegreesToRadians(schoolLatitude);

    const haversineValue =
      Math.sin(latitudeDifferenceInRadians / 2) ** 2 +
      Math.cos(userLatitudeInRadians) *
        Math.cos(schoolLatitudeInRadians) *
        Math.sin(longitudeDifferenceInRadians / 2) ** 2;

    const angularDistance =
      2 * Math.atan2(Math.sqrt(haversineValue), Math.sqrt(1 - haversineValue));

    return earthRadiusInKilometers * angularDistance;
  }

  private convertDegreesToRadians(degrees: number): number {
    return (degrees * Math.PI) / 180;
  }
}
