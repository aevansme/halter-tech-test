import React from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import Check from "../../../assets/images/check.png";
import Cross from "../../../assets/images/close.png";
import { globalStyles } from '../../../assets/styles/globalStyles';
import { typographyStyles } from '../../../assets/styles/typography';
import { HeatDetectionStatus } from '../../../enums/HeatDetectionStatus';
import { CowHeatResult } from '../../../types/CowHeatResult';
import { getTimeSince } from '../../../utils/dateUtils';
import { styles } from './DailyResultsRowStyles';

interface IDailyResultsRowPropTypes { 
    title: string, 
    results: CowHeatResult[], 
    handleClick: (r: CowHeatResult) => void
}

const DailyResultsRow = ({ title, results, handleClick }: IDailyResultsRowPropTypes) => {

    return (
        <View>
            <Text style={typographyStyles.subHeading}>{title}</Text>
            <View style={styles.container}>
                {
                    results.map(result => (
                        <TouchableHighlight key={result.cattleName} style={[styles.item, globalStyles.flexCenter]} onPress={() => handleClick(result)}>
                            <>
                                <Text style={typographyStyles.primaryText}>{result.cattleName}</Text>
                                {
                                    result.status === HeatDetectionStatus.DETECTED ? <Text style={typographyStyles.secondaryText}>{getTimeSince(result.firstDetectedAt)}</Text> : null
                                }
                                {
                                    result.status === HeatDetectionStatus.ON_HEAT ? <Image style={{width: 10, height: 10}} source={Check} /> : null
                                }
                                {
                                    result.status === HeatDetectionStatus.NOT_ON_HEAT ? <Image style={{width: 10, height: 10}} source={Cross} /> : null
                                }
                            </>
                        </TouchableHighlight >
                    ))
                }
            </View>
        </View>
    )
}

export default DailyResultsRow;