import type { insertSchoolToDatabase as InsertSchoolResult } from "../database/generated/prisma/sql/insertSchoolToDatabase";
import { SchoolResponse } from "../models/response/school-response.model";

export default class SchoolServiceHelper {
    public static toSchoolResponseList(results: InsertSchoolResult.Result[]): SchoolResponse[] {
        return results.map(
            (result): SchoolResponse => ({
                id: result.id,
                name: result.name,
                address: result.address,
                latitude: result.latitude,
                longitude: result.longitude,
            }),
        );
    }

    public static calculateDistanceInKilometers(userLatitude: number, userLongitude: number, schoolLatitude: number, schoolLongitude: number): number {
        const earthRadiusInKilometers = 6371;
        const latitudeDifferenceInRadians = this.convertDegreesToRadians(schoolLatitude - userLatitude);
        const longitudeDifferenceInRadians = this.convertDegreesToRadians(schoolLongitude - userLongitude);
        const userLatitudeInRadians = this.convertDegreesToRadians(userLatitude);
        const schoolLatitudeInRadians = this.convertDegreesToRadians(schoolLatitude);

        const haversineValue = Math.sin(latitudeDifferenceInRadians / 2) ** 2 + Math.cos(userLatitudeInRadians) * Math.cos(schoolLatitudeInRadians) * Math.sin(longitudeDifferenceInRadians / 2) ** 2;

        const angularDistance = 2 * Math.atan2(Math.sqrt(haversineValue), Math.sqrt(1 - haversineValue));

        return earthRadiusInKilometers * angularDistance;
    }

    public static convertDegreesToRadians(degrees: number): number {
        return (degrees * Math.PI) / 180;
    }
}
