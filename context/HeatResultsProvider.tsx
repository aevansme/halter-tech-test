import React, { createContext, useEffect, useState } from 'react';
import DATA from '../data/data';
import { HeatDetectionStatus } from '../enums/HeatDetectionStatus';
import { CowHeatResult, DailyResult } from '../types/CowHeatResult';
import { groupByDate, sortByDate } from '../utils/dateUtils';

export interface IResultsContext {
    results: CowHeatResult[],
    groupedResults: DailyResult[],
    unconfirmedResults: CowHeatResult[]
}

// Example: PropsWithChildren import 'react'
interface IHeatResultsPropTypes {
    children: JSX.Element | JSX.Element[]
}

export const ResultsContext = createContext<IResultsContext>({results: [], groupedResults: [], unconfirmedResults: []});

const HeatResultsProvider = ({ children }: IHeatResultsPropTypes) => {

    const [ results, setResults ] = useState<CowHeatResult[]>([])
    const [ groupedResults, setGroupedResults ] = useState<DailyResult[]>([]);
    const [ unconfirmedResults, setUnconfirmedResults ] = useState<CowHeatResult[]>([]);

    useEffect(() => {
        // Note: Promise/Fetch implementation of Cow Results
        // fetch("urlgoeshere").then(response => response.json()).then(response => {
        //     setResults(response);
        // })
        setResults(DATA);
    }, [])

    useEffect(() => {
        if (results && results.length > 0) {
            // 1. Group cows/results which have been confirmed to organise by date
            const heatResultsByDate: DailyResult[] = groupByDate("firstDetectedAt", results.filter(d => d.status !== HeatDetectionStatus.DETECTED));
            const sortedResult: DailyResult[] = sortByDate("date", heatResultsByDate);
            setGroupedResults(sortedResult);

            // 2. Track unconfirmed results to bump to top of page for confirmation.
            const test = results.filter(r => r.status === HeatDetectionStatus.DETECTED)
            setUnconfirmedResults(test);
        }        
    }, [results])

    return (
        <ResultsContext.Provider value={{results, groupedResults, unconfirmedResults}}>
            {children}
        </ResultsContext.Provider>
    )
}

export default HeatResultsProvider
