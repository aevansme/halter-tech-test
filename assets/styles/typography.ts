import { StyleSheet } from 'react-native';
import { palette } from './colors';
import { variables } from './variables';

// By creating a global design system we can ensure future changes
// to size, colors, fonts, etc are easy peasy!!
export const typographyStyles = StyleSheet.create({
    heading: {
        fontFamily: variables.fontFamily,
        fontSize: 44,
        lineHeight: 53,
        color: palette.primary
    },
    headingTwo: {
        fontSize: 24,
        fontWeight: "600"
    },
    subHeading: {
        fontFamily: variables.fontFamily,
        fontSize: 16,
        lineHeight: 20,
        color: palette.primary
    },
    primaryText: {
        fontFamily: variables.fontFamily,
        fontSize: 18,
        lineHeight: 20,
        color: palette.primary
    },
    secondaryText: {
        fontSize: 14,
        lineHeight: 16,
        color: palette.secondary
    },
    colorPrimary: {
        color: palette.primary
    },
    colorSecondary: {
        color: palette.secondary
    }
});