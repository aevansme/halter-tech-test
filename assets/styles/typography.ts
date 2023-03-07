import { StyleSheet } from 'react-native';
import { palette } from './colors';

// By creating a global design system we can ensure future changes
// to size, colors, fonts, etc are easy peasy!!
const fontFamily = 'SFPRO';

export const typographyStyles = StyleSheet.create({
    heading: {
        fontFamily,
        fontSize: 44,
        lineHeight: 53,
        color: palette.primary
    },
    subHeading: {
        fontFamily,
        fontSize: 16,
        lineHeight: 20,
        color: palette.primary
    },
    primaryText: {
        fontFamily,
        fontSize: 18,
        lineHeight: 20,
        color: palette.primary
    },
    secondaryText: {
        fontSize: 14,
        lineHeight: 16,
        color: palette.secondary
    },
    textPrimary: {
        color: palette.primary
    },
    textSecondary: {
        color: palette.secondary
    }
});