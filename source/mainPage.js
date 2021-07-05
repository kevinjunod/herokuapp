import React, { useState, useEffect } from 'react';
import {
    Text,
    FlatList,
    View,
    ActivityIndicator,
    Image,
    TouchableOpacity,
    Button,
    SafeAreaView,
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
    Modal,
    Pressable,
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { FAB, } from 'react-native-paper';
import { baseURL } from '../API/constants';

export default MainPage = (props) => {
    const [listContact, setListContact] = useState([{}]);
    const [filteredContact, setFilteredContact] = useState([{}]);
    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [photo, setPhoto] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

    const fetchAPI = async () => {
        return fetch(baseURL + "contact")
            .then((response) => response.json())
            .then((responseJson) => {
                setLoading(false);
                setListContact(responseJson);
                setFilteredContact(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    useEffect(() => {
        fetchAPI();
    }, []);

    const filterContact = (text) => {
        const newData = filteredContact.filter(item => {
            const itemData = item.id.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1
        });
        setFilteredContact(newData)
        setSearchTerm(text)
    }

    const addContact = (firstName, lastName, age, photo) => {
        fetch(baseURL + 'contact', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                age: parseInt(age),
                photo: photo,
            })
        });
    }

    const editContact = id => {
        console.log(id)
    }

    const deleteContact = id => {
        console.log(id)
    }

    const itemSeparator = () => {
        return (
            <View
                style={{
                    height: .5,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    }

    return (
        loading === false ?
            <View style={styles.container}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TextInput
                                style={styles.textInputModal}
                                value={firstName}
                                onChangeText={(text) => setFirstName(text)}
                                placeholder="First Name"
                                keyboardType="default"
                                placeholderTextColor="#000"
                            />
                            <TextInput
                                style={styles.textInputModal}
                                value={lastName}
                                onChangeText={(text) => setLastName(text)}
                                placeholder="Last Name"
                                keyboardType="default"
                                placeholderTextColor="#000"
                            />
                            <TextInput
                                style={styles.textInputModal}
                                value={age}
                                onChangeText={(text) => setAge(text)}
                                placeholder="Age"
                                keyboardType="number-pad"
                                placeholderTextColor="#000"
                            />
                            <TextInput
                                style={styles.textInputModal}
                                value={photo}
                                onChangeText={(text) => setPhoto(text)}
                                placeholder="url for photo profile"
                                keyboardType="default"
                                placeholderTextColor="#000"
                            />
                            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Cancel</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => { addContact(firstName, lastName, age, photo,), setModalVisible(!modalVisible) }}
                                >
                                    <Text style={styles.textStyle}>Add Contact</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Text style={styles.mainText}>HEROKUAPP</Text>
                <TextInput
                    style={{ backgroundColor: "#757575" }}
                    value={searchTerm}
                    onChangeText={(text) => filterContact(text)}
                    placeholder="Search Contact by id"
                    keyboardType="default"
                />
                <FlatList
                    data={listContact.data}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={itemSeparator}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => console.log(item.id)}
                            >
                                <View style={{ flexDirection: "row", padding: 10 }}>
                                    <Image source={{ uri: item.photo == "N/A" ? 'https://ipartspares.com/wp-content/uploads/2019/12/no-photo.png' : item.photo }}
                                        style={{ width: 75, height: 75, borderRadius: 20 }} />
                                    <View style={{ flexDirection: "column", marginLeft: 10, }}>
                                        <Text style={styles.detailContact}>{item.firstName} {item.lastName}</Text>
                                        <Text style={styles.detailContact}>{item.age} years old</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
                <FAB
                    style={styles.fab}
                    small false
                    icon="plus"
                    onPress={() => setModalVisible(true)}
                />
            </View>
            :
            <View style={styles.container}>
                <Text style={styles.mainText}>Loading . . .</Text>
                <View style={{ height: 15 }} />
                <ActivityIndicator size={"large"} color={"#FFF"} />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        justifyContent: "center",
        backgroundColor: "#303030"
    },
    mainText: {
        fontSize: 30,
        color: "#FFFFFF",
        alignSelf: 'center',
        marginBottom: 10,
        fontFamily: 'Lato-Regular'
    },
    fab: {
        position: 'absolute',
        margin: 26,
        right: 0,
        bottom: 0,
        backgroundColor: "#FFF",
    },
    detailContact: {
        color: "#FFF",
        fontSize: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    textInputModal: {
        backgroundColor: "#ECECEC", width: Dimensions.get('window').width / 2, color: '#000',
    }
})