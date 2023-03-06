import React, { useContext } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { ResultsContext } from "../../context/HeatResultsProvider";
import DailyResultsRow from './DailyResultsRow/DailyResultsRow';
import { DailyResult } from '../../types/CowHeatResult';

export default function HeatIndex() {
  
    const resultsContext: any = useContext(ResultsContext); 

    return (
        <View style={styles.container}>
            {
                resultsContext.map((r: DailyResult) => (
                    <DailyResultsRow data={r} key={r.date.getTime()}></DailyResultsRow>
                ))
            }  
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      margin: 10
    },
  });
  
