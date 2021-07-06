import React from 'react';
import {
    Text,
    View,
    Modal,
    Pressable,
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../styles/addCss'

const ModalAddContact = (props) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                props.setAdd(!props.modalVisible);
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
                    <View style={styles.cardButton}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => props.setAdd(!props.modalVisible)}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                        <View style={{ width: 25 }} />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => { props.addContact() }}
                        >
                            <Text style={styles.textStyle}>Add Contact</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalAddContact;