import { StyleSheet } from 'react-native';
import { palette } from '../../../assets/styles/colors';
import { variables } from '../../../assets/styles/variables';

export const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      flexWrap: "wrap",
      borderBottomColor: palette.lightGray,
      borderBottomWidth: variables.borderWidth,
      paddingBottom: 20,
      marginBottom: 20
    },
    item: {
        width: 56,
        height: 56,
        marginRight: 7,
        marginTop: 7,
        backgroundColor: palette.lighterGray,
        borderRadius: variables.borderRadiusL,
        textAlign: 'center'
    }
});
