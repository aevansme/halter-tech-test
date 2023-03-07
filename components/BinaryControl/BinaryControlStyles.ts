import { StyleSheet } from 'react-native'
import { palette } from '../../assets/styles/colors'
import { variables } from '../../assets/styles/variables'

export const styles = StyleSheet.create({
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    button: {
        width: 89,
        height: 48,
        fontFamily: variables.fontFamily
    },
    leftButton: {
        borderTopLeftRadius: variables.borderRadiusM,
        borderBottomLeftRadius: variables.borderRadiusM       
    },
    rightButton: {
        borderTopRightRadius: variables.borderRadiusM,
        borderBottomRightRadius: variables.borderRadiusM
    },
    selected: {
        backgroundColor: palette.primary,
        color: palette.white
    },
    unselected: {
        backgroundColor: palette.lighterGray,
        color: palette.primary
    }
})