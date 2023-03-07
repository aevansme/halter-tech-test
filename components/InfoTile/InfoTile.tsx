import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

const InfoTile = ({titleText, numberText, smallText}: {titleText: string, numberText: string, smallText: string}) => {
    return (
        <View style={styles.tileContainer}>
            <Text style={styles.topText}>{titleText}</Text>
            <Text style={styles.middleText}>{numberText}</Text>
            <Text style={styles.bottomText}>{smallText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tileContainer: {
        flex: 1,
        alignItems: 'center'
    },
    topText: {
        fontSize: 18,
    },
    middleText: {
        fontSize: 44
    },
    bottomText: {
        fontSize: 14,
        color: '#717378'
    }
});

export default InfoTile
