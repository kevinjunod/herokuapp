import React from 'react';
import {
    Text,
    View,
    Modal,
    Pressable,
    Image,
    ActivityIndicator,
} from 'react-native'
import { styles } from '../styles/detailCss'

const ModalDetailContact = (props) => {
    return (
        props ?
            <Modal
                animationType="fade"
                transparent={true}
                visible={props.detailModalVisible}
                onRequestClose={() => {
                    props.setDetail(!props.detailModalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.contentDetail}>
                            <Image
                                source={{
                                    uri: props.item.photo == "N/A" ?
                                        'https://ipartspares.com/wp-content/uploads/2019/12/no-photo.png'
                                        :
                                        props.item.photo
                                }}
                                style={styles.styleImage} />
                            <Text style={styles.contentText}>{props.item.firstName} {props.item.lastName}</Text>
                            <Text style={[styles.contentText, { paddingBottom: 10 }]}>{props.item.age} years old</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => props.setDetail(!props.detailModalVisible)}
                            >
                                <Text style={styles.textStyle}>OK</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            :
            <View style={styles.container}>
                <ActivityIndicator
                    size={"large"}
                    color={"#808080"}
                />
            </View>
    )
}

export default ModalDetailContact;