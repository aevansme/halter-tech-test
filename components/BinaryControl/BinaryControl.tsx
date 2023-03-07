import React, { useState } from 'react'
import { View, Pressable } from 'react-native'
import { globalStyles } from '../../assets/styles/globalStyles';
import { styles } from './BinaryControlStyles';

const BinaryControl = (props: any) => {

    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected)
        props.handleClick(!isSelected);
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable
                onPress={handleClick}
                accessibilityLabel="No selection option"
                style={[styles.button, globalStyles.flexCenter, styles.leftButton, !isSelected ? styles.selected : styles.unselected]}
            >
                No
            </Pressable>
            <Pressable
                onPress={handleClick}
                accessibilityLabel="Yes selection option"
                style={[styles.button, globalStyles.flexCenter, styles.rightButton, isSelected ? styles.selected : styles.unselected]}
            >
                Yes
            </Pressable>
        </View>
    )
}

export default BinaryControl
