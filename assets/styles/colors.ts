import { StyleSheet } from 'react-native';

interface IColorPallette {
    primary: string,
    secondary: string,
    danger: string,
    lightGray: string,
    lighterGray: string
}

// By creating a global design system we can ensure future changes
// to size, colors, fonts, etc are easy peasy!!
export const palette: IColorPallette = {
    primary: '#141518',
    secondary: '#717378',
    lightGray: '#D5D7DB',
    lighterGray: '#F2F3F5',
    danger: '#E41D1D'
}