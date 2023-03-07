import { View, StyleSheet } from 'react-native'
import { palette } from '../../../assets/styles/colors'

export const styles = StyleSheet.create({
    tileContainer: {
        display: "flex",
        flexDirection: "row",
        height: 150
    },
    firstChild: {
        borderRightColor: palette.lightGray,
        borderRightWidth: 2
    }
})