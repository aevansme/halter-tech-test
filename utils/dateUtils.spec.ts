import { HeatDetectionStatus } from "../enums/HeatDetectionStatus";
import { CowHeatResult } from "../types/CowHeatResult";
import { groupByDate } from "./dateUtils";

// Positive Test Cases
it ("Should group a single result by it's detection date", () => {
    // Arrange
    const data: CowHeatResult[] = [{
        "cattleName":"163",
        "firstDetectedAt": new Date("2021-05-27T16:00:00.000Z"),
        "id":"93c9d8b7-77ff-451c-8d0a-5bc321cc76fe",
        "status": HeatDetectionStatus.DETECTED,
        "symptoms":[]
    }];

    // Act
    const result: any[] = groupByDate("firstDetectedAt", data);

    // Assert
    expect(result.length).toBe(1);
    expect(result[0].results.length).toBe(1);
})

it ("Should group multiple results by their detection date", () => {
    // Arrange
    const data: CowHeatResult[] = [{
        "cattleName":"163",
        "firstDetectedAt": new Date("2021-05-27T16:00:00.000Z"),
        "id":"93c9d8b7-77ff-451c-8d0a-5bc321cc76fe",
        "status": HeatDetectionStatus.DETECTED,
        "symptoms":[]
    }, {
        "cattleName":"164",
        "firstDetectedAt": new Date("2021-05-28T16:00:00.000Z"),
        "id":"0e4f359f-f15f-461c-842a-44b0da38fa52",
        "status": HeatDetectionStatus.NOT_ON_HEAT,
        "symptoms":[]
    }, {
        "cattleName":"1653",
        "firstDetectedAt": new Date("2021-05-29T16:00:00.000Z"),
        "id":"290bc507-d917-4b90-afd9-75cff6965a8f",
        "status": HeatDetectionStatus.ON_HEAT,
        "symptoms":[]
    }];

    // Act
    const result: any[] = groupByDate("firstDetectedAt", data);

    // Assert
    expect(result.length).toBe(3);
    expect(result[0].results.length).toBe(1);
    expect(result[1].results.length).toBe(1);
    expect(result[2].results.length).toBe(1);
})

// Negative Test Cases
it ("Should return an empty array when an the array parameter is empty", () => {
    // Arrange
    const data: CowHeatResult[] = [];

    // Act
    const result: any[] = groupByDate("firstDetectedAt", data);

    // Assert
    expect(result.length).toBe(0);
})