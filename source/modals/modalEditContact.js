import React from 'react';
import {
    Text,
    View,
    Modal,
    Pressable,
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../styles/editCss'

const ModalEditContact = (props) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.editModalVisible}
            onRequestClose={() => {
                props.setEdit(!props.editModalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TextInput
                        style={styles.textInputModal}
                        value={props.firstName}
                        onChangeText={(text) => props.setFirstName(text)}
                        placeholder="First Name"
                        keyboardType="default"
                        placeholderTextColor="#000"
                    />
                    <TextInput
                        style={styles.textInputModal}
                        value={props.lastName}
                        onChangeText={(text) => props.setLastName(text)}
                        placeholder="Last Name"
                        keyboardType="default"
                        placeholderTextColor="#000"
                    />
                    <TextInput
                        style={styles.textInputModal}
                        value={props.age}
                        onChangeText={(text) => props.setAge(text)}
                        placeholder="Age"
                        keyboardType="number-pad"
                        placeholderTextColor="#000"
                    />
                    <TextInput
                        style={styles.textInputModal}
                        value={props.photo}
                        onChangeText={(text) => props.setPhoto(text)}
                        placeholder="url for photo profile"
                        keyboardType="default"
                        placeholderTextColor="#000"
                    />
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => props.setEdit(!props.editModalVisible)}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => { props.editContact(props.id) }}
                        >
                            <Text style={styles.textStyle}>Save Changes</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalEditContact;