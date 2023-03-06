import React, { createContext, useEffect, useState } from 'react'
import DATA from '../data/data';
import { CowHeatResult } from '../types/CowHeatResult';
import { groupByDate, sortByDate } from '../utils/dateUtils';

export const ResultsContext = createContext({});

const HeatResultsProvider = (props: any) => {

    const { children } = props;
    const [ results, setResults ] = useState<CowHeatResult[]>([])

    useEffect(() => {
        // TODO: Use axios
        //fetch("../data/data.ts").then(response => response.json()).then(response => {
            const heatResultsByDate: any[] = groupByDate("firstDetectedAt", DATA);
            const sortedResult: any[] = sortByDate("date", heatResultsByDate);
            setResults(sortedResult);
        //})

        return () => {
            // NA
        }
    }, [])

    return (
        <ResultsContext.Provider value={results}>
            {children}
        </ResultsContext.Provider>
    )
}

export default HeatResultsProvider
