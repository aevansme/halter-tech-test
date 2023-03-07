import { StyleSheet } from 'react-native';
import { palette } from '../../../assets/styles/colors';
import { variables } from '../../../assets/styles/variables';

export const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    modalView: {
        width: "100%",
        backgroundColor: palette.white,
        borderTopLeftRadius: variables.borderRadiusL,
        borderTopRightRadius: variables.borderRadiusL,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    headingContainer: {
        paddingBottom: 15,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    innerText: {
        fontWeight: "500"
    },
    heatSelectionContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        borderTopWidth: variables.borderWidth,
        borderTopColor: palette.lightGray,
        borderBottomWidth: variables.borderWidth,
        borderBottomColor: palette.lightGray,
        paddingVertical: 25
    },
    button: {
        borderRadius: variables.borderRadiusM,
        paddingVertical: 12,
        paddingHorizontal: 16,
        elevation: 2,
        width: "100%"
    },
    buttonClose: {
      backgroundColor: palette.primary,
      marginTop: 15
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    checkboxContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomColor: palette.lightGray
    }
  });