import moment from 'moment';
import React from 'react'
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';
import { DailyResult } from '../../../types/CowHeatResult';
import { getFormattedDate } from '../../../utils/dateUtils';
import Check from "../../../assets/check.png";

const DailyResultsRow = ({ data, handleClick }: { data: DailyResult, handleClick: any}) => {

    return (
        <View>
            <Text>{getFormattedDate(data.date)}</Text>
            <View style={styles.container}>
                {
                    data.results.map(result => (
                        <TouchableHighlight key={result.cattleName} style={styles.item} onPress={() => handleClick(result)}>
                            <View>
                                <Text>
                                    {result.cattleName}
                                </Text>
                                <Image style={{width: 15, height: 15}} source={Check} />
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
