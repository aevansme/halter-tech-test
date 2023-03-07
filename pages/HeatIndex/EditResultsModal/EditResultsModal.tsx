import React from 'react'
import { Modal, Pressable, View, Text } from 'react-native';
import { CowHeatResult } from '../../../types/CowHeatResult';
import { HeatSymptomStatus } from '../../../enums/HeatSymptomStatus';
import { convertSnakeToSentenceCase } from '../../../utils/stringUtils';
import BinaryControl from '../../../components/BinaryControl/BinaryControl';
import { getTimeSince } from '../../../utils/dateUtils';
import CustomCheckbox from '../../../components/CustomCheckbox/CustomCheckbox';
import { typographyStyles } from '../../../assets/styles/typography';
import { styles } from './EditResultsModalStyles';

interface IEditResultsModal {
    data: CowHeatResult, 
    handleClose: any
}

const EditResultsModal = ({ data, handleClose }: IEditResultsModal) => {

    const handleCheck = (value: CowHeatResult, enumVal: HeatSymptomStatus) => {
        // ..... Update symptoms in global store.
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

export default EditResultsModal;
