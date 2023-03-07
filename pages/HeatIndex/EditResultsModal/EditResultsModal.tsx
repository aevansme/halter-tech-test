import React, { useState } from 'react'
import { Modal, Pressable, View, Text, StyleSheet } from 'react-native';
import { CowHeatResult } from '../../../types/CowHeatResult';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { HeatDetectionStatus } from '../../../enums/HeatDetectionStatus';
import { HeatSymptomStatus } from '../../../enums/HeatSymptomStatus';
import { convertSnakeToSentenceCase } from '../../../utils/stringUtils';
import BinaryControl from '../../../components/BinaryControl/BinaryControl';
import { getTimeSince } from '../../../utils/dateUtils';
import CustomCheckbox from '../../../components/CustomCheckbox/CustomCheckbox';
import { typographyStyles } from '../../../assets/styles/typography';
import { palette } from '../../../assets/styles/colors';
import { variables } from '../../../assets/styles/variables';

const EditResultsModal = ({ data, handleClose }: {data: CowHeatResult, handleClose: any}) => {

    const handleCheck = (value: CowHeatResult, enumVal: HeatSymptomStatus) => {
        // value.symptoms.
    }
    
    return (
        <Modal
            animationType="slide"
            transparent={true}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {/* Top Row */}
                    <View style={styles.headingContainer}>
                        <Text style={typographyStyles.headingTwo}>Cow {data.cattleName}</Text>
                        <Text style={typographyStyles.secondaryText}>
                            First detected <Text style={styles.innerText}>{getTimeSince(data.firstDetectedAt)}</Text> ago
                        </Text>
                    </View>
                    
                    {/* Middle Row */}
                    <View style={styles.checkboxContainer}>
                        {
                            Object.keys(HeatSymptomStatus).filter((v) => isNaN(Number(v))).map((value: any) => (
                                <CustomCheckbox text={convertSnakeToSentenceCase(value)} isChecked={data.symptoms.includes(value)} key={value}></CustomCheckbox>
                            ))
                        }
                    </View>

                     {/* Bottom Row */}
                    <View style={styles.heatSelectionContainer}>
                        <Text>Cow on heat?</Text>
                        <BinaryControl></BinaryControl>
                    </View>

                     {/* Button/Submission Row */}
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={handleClose}>
                        <Text style={styles.textStyle}>Done</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    modalView: {
        width: "100%",
        backgroundColor: 'white',
        borderRadius: 24,
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

export default EditResultsModal;
