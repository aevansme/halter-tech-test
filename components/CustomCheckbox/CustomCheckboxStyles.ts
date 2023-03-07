import { StyleSheet } from 'react-native';
import { palette } from '../../assets/styles/colors';
import { variables } from '../../assets/styles/variables';

const checkBoxDimensions = 12;

export const styles = StyleSheet.create({
    iconStyle: { 
        borderColor: "black", 
        borderRadius: 3,
        padding: 3,
        height: checkBoxDimensions,
        width: checkBoxDimensions
    },
    textStyle: { 
        textDecorationLine: "none", 
    },
    innerIconStyle: {
        borderRadius: 3,
        padding: 3,
        height: checkBoxDimensions,
        width: checkBoxDimensions
    },
    generalStyle: {
        backgroundColor: palette.lighterGray, 
        display: "flex", 
        margin: 2, 
        paddingHorizontal: 12, 
        paddingVertical: 6, 
        borderRadius: variables.borderRadiusM
    }
});