import React, { Context, useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { IResultsContext, ResultsContext } from "../../context/HeatResultsProvider";
import { CowHeatResult, DailyResult } from '../../types/CowHeatResult';
import { getFormattedDate } from '../../utils/dateUtils';
import DailyResultsRow from './DailyResultsRow/DailyResultsRow';
import EditResultsModal from './EditResultsModal/EditResultsModal';
import { styles } from './HeatIndexStyles';
import HerdStatisticsRow from './HerdStatisticsRow/HerdStatisticsRow';

export default function HeatIndex() {
  
    const resultsContextStore: IResultsContext = useContext(ResultsContext); 
    const [selectedResult, setSelectedResult] = useState<CowHeatResult | null>(null);

    // Modal Event Handlers
    const handleOpen = (data: CowHeatResult) => setSelectedResult(data)
    const handleClose = () => {
        setSelectedResult(null)
    }

    // Guard clause - Display loading while data is being retrieved from API
    if (!resultsContextStore) {
        return <View>Loading...</View>
    } 

    return (
        <View style={styles.container}>
            {/* 1. Display high-level statistics. ie. Cows Cycled Percentage % & Amount uncycled*/}
            <HerdStatisticsRow data={resultsContextStore.results}></HerdStatisticsRow>

            {/* 2. Display cows which are not YET confirmed as ON_HEAT */}
            { resultsContextStore.unconfirmedResults && <DailyResultsRow title="Unconfirmed heat" results={resultsContextStore.unconfirmedResults} handleClick={handleOpen}></DailyResultsRow>}
            
            {/* 3. Display cows which are on heat */}
            {
                resultsContextStore.groupedResults.map((r: DailyResult) => (
                    <DailyResultsRow title={getFormattedDate(r.date)} results={r.results} key={r.date.getTime()} handleClick={handleOpen}></DailyResultsRow>
                ))
            }  
            {/* 4. Modal option to allow editting of cow-results. Activated onpress */}
            {
                selectedResult && <EditResultsModal data={selectedResult} handleClose={handleClose}></EditResultsModal>
            }

            {/* 5. TODO: Add loading spinners while data is being fetched.  */}

            {/* 6. TODO: Display friendly message when no results are available.  */}
        </View>
    )
};


  
