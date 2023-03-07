import React from 'react';
import { Text, View } from 'react-native';
import { typographyStyles } from '../../assets/styles/typography';
import { styles } from './InfoTileStyles';

interface IInfoTilePropTypes {
    titleText: string, 
    numberText: string, 
    smallText: string
}

const InfoTile = ({titleText, numberText, smallText}: IInfoTilePropTypes) => {
    return (
        <View style={styles.tileContainer}>
            <Text style={typographyStyles.primaryText}>{titleText}</Text>
            <Text style={typographyStyles.heading}>{numberText}</Text>
            <Text style={typographyStyles.secondaryText}>{smallText}</Text>
        </View>
    )
}

export default InfoTile
