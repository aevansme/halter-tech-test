import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

import { CowHeatResult } from '../../../types/CowHeatResult';
import { getTimeSince } from '../../../utils/dateUtils';
import Check from "../../../assets/check.png";
import Cross from "../../../assets/close.png";
import { HeatDetectionStatus } from '../../../enums/HeatDetectionStatus';

const DailyResultsRow = ({ title, results, handleClick }: { title: string, results: CowHeatResult[], handleClick: any}) => {

    return (
        <View>
            <Text>{title}</Text>
            <View style={styles.container}>
                {
                    results.map(result => (
                        <TouchableHighlight key={result.cattleName} style={styles.item} onPress={() => handleClick(result)}>
                            <View>
                                <Text>
                                    {result.cattleName}
                                </Text>
                                {
                                    result.status === HeatDetectionStatus.DETECTED ? getTimeSince(result.firstDetectedAt) : null
                                }
                                {
                                    result.status === HeatDetectionStatus.ON_HEAT ? <Image style={{width: 15, height: 15}} source={Check} /> : null
                                }
                                {
                                    result.status === HeatDetectionStatus.NOT_ON_HEAT ? <Image style={{width: 15, height: 15}} source={Cross} /> : null
                                }
                            </View>
                        </TouchableHighlight >
                    ))
                }
            </View>
        </View>
    )
}

export default DailyResultsRow;

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      flexWrap: "wrap",
      width: "100vw",
      borderBottomColor: "lightgray",
      borderBottomWidth: 2,
      marginTop: 10,
      marginBottom: 10
    },
    item: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 56,
        height: 56,
        margin: 12,
        backgroundColor: "#F2F3F5",
        fontSize: 18,
        lineHeight: 20,
        textAlign: "center",
        fontWeight: 500,
        color: "#141518",
        borderRadius: 12
    }
});
