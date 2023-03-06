import React, { useContext, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ResultsContext } from "../../context/HeatResultsProvider";
import DailyResultsRow from './DailyResultsRow/DailyResultsRow';
import { CowHeatResult, DailyResult } from '../../types/CowHeatResult';
import EditResultsModal from './EditResultsModal/EditResultsModal';

export default function HeatIndex() {
  
    const resultsContext: any = useContext(ResultsContext); 
    const [selectedResult, setSelectedResult] = useState<CowHeatResult | null>(null);

    // Modal Event Handlers
    const handleOpen = (data: CowHeatResult) => setSelectedResult(data)
    const handleClose = () => setSelectedResult(null)

    return (
        <View style={styles.container}>
            {
                resultsContext.map((r: DailyResult) => (
                    <DailyResultsRow data={r} key={r.date.getTime()} handleClick={handleOpen}></DailyResultsRow>
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
  
