import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { ResultsContext } from "../../context/HeatResultsProvider";
import DailyResultsRow from './DailyResultsRow/DailyResultsRow';
import { CowHeatResult, DailyResult } from '../../types/CowHeatResult';
import EditResultsModal from './EditResultsModal/EditResultsModal';
import HerdStatisticsRow from './HerdStatisticsRow/HerdStatisticsRow';
import { HeatDetectionStatus } from '../../enums/HeatDetectionStatus';
import { getFormattedDate } from '../../utils/dateUtils';

export default function HeatIndex() {
  
    const resultsContext: any = useContext(ResultsContext); 
    const [selectedResult, setSelectedResult] = useState<CowHeatResult | null>(null);

    // Modal Event Handlers
    const handleOpen = (data: CowHeatResult) => setSelectedResult(data)
    const handleClose = () => setSelectedResult(null)

    useEffect(() => {

    }, [])

    return (
        <View style={styles.container}>
            <HerdStatisticsRow data={resultsContext.results}></HerdStatisticsRow>

            { resultsContext.unconfirmedResults && <DailyResultsRow title="Unconfirmed heat" results={resultsContext.unconfirmedResults} handleClick={handleOpen}></DailyResultsRow>}
            {
                resultsContext.groupedResults.map((r: DailyResult) => (
                    <DailyResultsRow title={getFormattedDate(r.date)} results={r.results} key={r.date.getTime()} handleClick={handleOpen}></DailyResultsRow>
                ))
            }  
            {
                selectedResult && <EditResultsModal data={selectedResult} handleClose={handleClose}></EditResultsModal>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      margin: 10
    },
  });
  
