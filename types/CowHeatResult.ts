import { HeatDetectionStatus } from "../enums/HeatDetectionStatus";
import { HeatSymptomStatus } from "../enums/HeatSymptomStatus";

export interface CowHeatResult {
    cattleName: string,
    firstDetectedAt: Date,
    id: string,
    status: HeatDetectionStatus,
    symptoms: HeatSymptomStatus[]  
}