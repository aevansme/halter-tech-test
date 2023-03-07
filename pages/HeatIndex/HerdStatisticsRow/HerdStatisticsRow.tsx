import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import InfoTile from '../../../components/InfoTile/InfoTile'
import { HeatDetectionStatus } from '../../../enums/HeatDetectionStatus';
import { CowHeatResult } from '../../../types/CowHeatResult';

const HerdStatisticsRow = ({data}: {data: any[]}) => {

    // What is a cow cycle? Their reproductive cycle? How can I calculate this?

    // Data for info/statistics
    const [percentageOfCowsCycled, setPercentageOfCowsCycled] = useState(0);
    const [amountOfCowsUncycled, setAmountOfCowsUncycled] = useState(0)

    useEffect(() => {
        if (data) {
            const cowsCycled = data.filter((r: CowHeatResult) => r.status === HeatDetectionStatus.ON_HEAT).length;
            setPercentageOfCowsCycled(cowsCycled/data.length*100);
            setAmountOfCowsUncycled(data.length - cowsCycled)
        }
    }, [data])

    return (
        <View style={styles.tileContainer}>
            <View style={styles.firstChild}>
                <InfoTile titleText="Cows cycled" numberText={percentageOfCowsCycled.toString() + "%"} smallText="20d since PSM"></InfoTile>
            </View>            
            <InfoTile titleText="Not yet cycled" numberText={amountOfCowsUncycled.toString()} smallText="Cows"></InfoTile>
        </View>
    )
}

const styles = StyleSheet.create({
    tileContainer: {
        display: "flex",
        flexDirection: "row",
        height: 111
    },
    firstChild: {
        width: '50%',
        borderRightColor: "#D5D7DB",
        borderRightWidth: 2
    }
})

export default HerdStatisticsRow
