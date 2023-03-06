import React, { useState } from 'react'
import { Modal, Pressable, View, Text, StyleSheet } from 'react-native';
import { CowHeatResult } from '../../../types/CowHeatResult';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { HeatDetectionStatus } from '../../../enums/HeatDetectionStatus';
import { HeatSymptomStatus } from '../../../enums/HeatSymptomStatus';
import { convertSnakeToSentenceCase } from '../../../utils/stringUtils';
import BinaryControl from '../../../components/BinaryControl/BinaryControl';
import { getTimeSince } from '../../../utils/dateUtils';

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
                        <Text style={styles.modalTitle}>Cow {data.cattleName}</Text>
                        <Text style={styles.secondaryTitleText}>
                            First detected <Text style={styles.innerText}>{getTimeSince(data.firstDetectedAt)}</Text> ago
                        </Text>
                    </View>
                    
                    {/* Middle Row */}
                    <View style={styles.checkboxContainer}>
                        {
                            Object.keys(HeatSymptomStatus).filter((v) => isNaN(Number(v))).map((value: any) => (
                                <BouncyCheckbox 
                                    onPress={(isChecked: boolean) => {}} 
                                    fillColor="black"
                                    isChecked={data.symptoms.includes(value)}
                                    text={convertSnakeToSentenceCase(value)}
                                    iconStyle={{ borderColor: "black", borderRadius: 0}}
                                    textStyle={{ textDecorationLine: "none", color: "#404145", fontSize: 14}}
                                    innerIconStyle={{borderRadius: 0}}
                                    style={{backgroundColor: "#E8EAED", display: "flex", margin: 2, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8 }}
                                /> 
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
    modalTitle: {
        fontSize: 24,
        fontWeight: "600"
    },
    secondaryTitleText: {
        fontSize: 16
    },
    innerText: {
        fontWeight: "500"
    },
    heatSelectionContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        borderTopWidth: 2,
        borderTopColor: '#D5D7DB',
        borderBottomWidth: 2,
        borderBottomColor: '#D5D7DB',
        paddingVertical: 15
    },
    button: {
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        elevation: 2,
        width: "100%"
    },
    buttonClose: {
      backgroundColor: '#141518',
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
        borderBottomColor: '#D5D7DB'
    }
  });

export default EditResultsModal;
