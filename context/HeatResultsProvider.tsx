import React, { createContext, useEffect, useState } from 'react'
import DATA from '../data/data';
import { HeatDetectionStatus } from '../enums/HeatDetectionStatus';
import { CowHeatResult } from '../types/CowHeatResult';
import { groupByDate, sortByDate } from '../utils/dateUtils';

export const ResultsContext = createContext({});

const HeatResultsProvider = (props: any) => {

    const { children } = props;
    const [ results, setResults ] = useState<CowHeatResult[]>([])
    const [ groupedResults, setGroupedResults ] = useState<any[]>([]);
    const [ unconfirmedResults, setUnconfirmedResults ] = useState<any[]>([]);

    useEffect(() => {
        // TODO: Use axios
        //fetch("../data/data.ts").then(response => response.json()).then(response => {
            setResults(DATA);
        //})
    }, [])

    useEffect(() => {
        if (results && results.length > 0) {
            // 1. Group cows/results which have been confirmed to organise by date
            const heatResultsByDate: any[] = groupByDate("firstDetectedAt", results.filter(d => d.status !== HeatDetectionStatus.DETECTED));
            const sortedResult: any[] = sortByDate("date", heatResultsByDate);
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
