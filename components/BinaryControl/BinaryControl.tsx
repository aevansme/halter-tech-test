import React, { useState } from 'react'
import { Button, View, StyleSheet, Pressable } from 'react-native'

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
                style={[styles.button, styles.leftButton, !isSelected ? styles.selected : styles.unselected]}
            >
                No
            </Pressable>
            <Pressable
                onPress={handleClick}
                accessibilityLabel="Yes selection option"
                style={[styles.button, styles.rightButton, isSelected ? styles.selected : styles.unselected]}
            >
                Yes
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    button: {
        width: 89,
        height: 48,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftButton: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8        
    },
    rightButton: {
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    },
    selected: {
        backgroundColor: "#141518",
        color: "#FFF"
    },
    unselected: {
        backgroundColor: "#E8EAED",
        color: "#141518"
    }
})

export default BinaryControl
