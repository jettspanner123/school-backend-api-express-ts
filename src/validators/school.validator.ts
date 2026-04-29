import { z } from "zod";

import { type AddSchoolRequest } from "../models/request/add-school-request.model";
import { type ListSchoolsRequest } from "../models/request/list-schools-request.model";

const schoolNameSchema = z.string().trim().min(1, "School name is required").max(150, "School name must be at most 150 characters long");

const schoolAddressSchema = z.string().trim().min(1, "School address is required").max(255, "School address must be at most 255 characters long");

const latitudeSchema = z.number().min(-90, "Latitude must be greater than or equal to -90").max(90, "Latitude must be less than or equal to 90");

const longitudeSchema = z.number().min(-180, "Longitude must be greater than or equal to -180").max(180, "Longitude must be less than or equal to 180");

const addSchoolRequestSchema: z.ZodType<AddSchoolRequest> = z
    .object({
        address: schoolAddressSchema,
        latitude: latitudeSchema,
        longitude: longitudeSchema,
        name: schoolNameSchema,
    })
    .strict();

const listSchoolsRequestSchema: z.ZodType<ListSchoolsRequest> = z
    .object({
        latitude: z.coerce.number().min(-90, "Latitude must be greater than or equal to -90").max(90, "Latitude must be less than or equal to 90"),
        longitude: z.coerce.number().min(-180, "Longitude must be greater than or equal to -180").max(180, "Longitude must be less than or equal to 180"),
    })
    .strict();

export class SchoolValidation {
    public static readonly addSchoolRequestSchema = addSchoolRequestSchema;
    public static readonly listSchoolsRequestSchema = listSchoolsRequestSchema;

    private constructor() {}
}
