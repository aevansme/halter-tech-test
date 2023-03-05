import React, { useContext } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { ResultsContext } from "../../context/HeatResultsProvider";

export default function HeatIndex() {
  
    const resultsContext: any = useContext(ResultsContext); 
    console.log(resultsContext);

    return (
        <View style={styles.container}>
            
            <Text>asdf {resultsContext.map((r: any) => r.id)}</Text> 
            
            <Text>Cows Cycledasdf</Text>
            <Text>95%</Text>
            <Text>20d since PSM</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
