import React from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { palette } from '../../assets/styles/colors'
import { typographyStyles } from '../../assets/styles/typography'
import { styles } from './CustomCheckboxStyles'

interface ICustomCheckboxProps {
    text: string,
    isChecked: boolean
}

const CustomCheckbox = ({text, isChecked}: ICustomCheckboxProps) => {
    return (
        <BouncyCheckbox 
            onPress={(isChecked: boolean) => {}} 
            fillColor={palette.primary}
            isChecked={isChecked}
            text={text}
            iconStyle={styles.iconStyle}
            textStyle={[styles.textStyle, typographyStyles.secondaryText, typographyStyles.colorPrimary]}
            innerIconStyle={styles.innerIconStyle}
            style={styles.generalStyle}
        /> 
    )
}

export default CustomCheckbox
