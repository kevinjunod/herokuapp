import React from 'react';
import {
    Text,
    View,
    Modal,
    Pressable,
} from 'react-native'
import { styles } from '../styles/deleteCss'

const ModalDeleteContact = (props) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.deleteModalVisible}
            onRequestClose={() => {
                props.setDelete(!props.deleteModalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={{ fontSize: 16 }}>Are you sure you want to delete this contact?</Text>
                    <View style={styles.cardButton}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => props.setDelete(!props.deleteModalVisible)}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                        <View style={{ width: 25 }} />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => { props.deleteContact(props.id) }}
                        >
                            <Text style={styles.textStyle}>Delete Contact</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalDeleteContact;