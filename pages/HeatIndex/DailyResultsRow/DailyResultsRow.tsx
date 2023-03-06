import moment from 'moment';
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { DailyResult } from '../../../types/CowHeatResult';
import { getFormattedDate } from '../../../utils/dateUtils';
import Check from "./check.png";

const DailyResultsRow = (props: any) => {

    const result: DailyResult = props.data;

    return (
        <View>
            <Text>
                {
                    getFormattedDate(result.date)
                }
            </Text>
            <View style={styles.container}>
                {
                    result.results.map(r => (
                        <View key={r.cattleName} style={styles.item}>
                            <Text>
                                {r.cattleName}
                            </Text>
                            <Image  style={{width: 10, height: 10}} source={Check} alt="SHOWSOMETHING" />
                        </View>
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
