import React, { useContext, useEffect, useState } from 'react'
import { View } from 'react-native';

import { ResultsContext } from "../../context/HeatResultsProvider";
import DailyResultsRow from './DailyResultsRow/DailyResultsRow';
import { CowHeatResult, DailyResult } from '../../types/CowHeatResult';
import EditResultsModal from './EditResultsModal/EditResultsModal';
import HerdStatisticsRow from './HerdStatisticsRow/HerdStatisticsRow';
import { getFormattedDate } from '../../utils/dateUtils';
import { styles } from './HeatIndexStyles';

export default function HeatIndex() {
  
    const resultsContext: any = useContext(ResultsContext); 
    const [selectedResult, setSelectedResult] = useState<CowHeatResult | null>(null);

    // Modal Event Handlers
    const handleOpen = (data: CowHeatResult) => setSelectedResult(data)
    const handleClose = () => setSelectedResult(null)

    useEffect(() => {
        
    }, [resultsContext])

    return (
        <View style={styles.container}>
            {/* 1. Display high-level statistics. ie. Cows Cycled Percentage % & Amount uncycled*/}
            <HerdStatisticsRow data={resultsContext.results}></HerdStatisticsRow>

            {/* 2. Display cows which are not YET confirmed as ON_HEAT */}
            { resultsContext.unconfirmedResults && <DailyResultsRow title="Unconfirmed heat" results={resultsContext.unconfirmedResults} handleClick={handleOpen}></DailyResultsRow>}
            
            {/* 3. Display cows which are on heat */}
            {
                resultsContext.groupedResults.map((r: DailyResult) => (
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


  
