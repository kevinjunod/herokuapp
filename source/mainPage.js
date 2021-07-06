import React, { useState, useEffect, useCallback } from 'react';
import {
    Text,
    FlatList,
    View,
    ActivityIndicator,
    Image,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';
import ModalAddContact from './modals/modalAddContact';
import ModalEditContact from './modals/modalEditContact';
import ModalDeleteContact from './modals/modalDeleteContact';
import ModalDetailContact from './modals/modalDetailContact';
import {
    FAB,
    IconButton,
} from 'react-native-paper';
import { baseURL } from '../API/constants';
import { styles } from './styles/mainCss';

export default MainPage = () => {
    const [listContact, setListContact] = useState([{}]);
    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [photo, setPhoto] = useState("");
    const [loading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [detailModalVisible, setDetailModalVisible] = useState(false);
    const [item, setItem] = useState({});

    const setAdd = useCallback((visible) => {
        return setModalVisible(visible)
    }, [])

    const setEdit = useCallback((visible) => {
        return setEditModalVisible(visible)
    }, [])

    const setDelete = useCallback((visible) => {
        return setDeleteModalVisible(visible)
    }, [])

    const setDetail = useCallback((visible) => {
        return setDetailModalVisible(visible)
    }, [])

    const editingContact = (id) => {
        setEditModalVisible(true)
        setId(id)
    }

    const deletingContact = (id) => {
        setDeleteModalVisible(true)
        setId(id)
    }

    const detailingContact = (item) => {
        setDetailModalVisible(true)
        setItem(item)
    }

    const fetchAPI = async () => {
        return fetch(baseURL + "contact")
            .then((response) => response.json())
            .then((responseJson) => {
                setLoading(false);
                setListContact(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    useEffect(() => {
        fetchAPI();
    }, []);

    const addContact = async () => {
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
        fetchAPI();
        setModalVisible(!modalVisible);
        setFirstName("");
        setLastName("");
        setAge("");
        setPhoto("");
    }

    const editContact = async (id) => {
        fetch(baseURL + 'contact/' + id, {
            method: 'PUT',
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
        fetchAPI();
        setEditModalVisible(!editModalVisible);
        setFirstName("");
        setLastName("");
        setAge("");
        setPhoto("");
    }

    const deleteContact = async (id) => {
        fetch(baseURL + 'contact/' + id, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                ToastAndroid.showWithGravity(
                    responseJson.message,
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                );
            })
            .catch((error) => {
                console.error(error);
            });
        fetchAPI();
        setDeleteModalVisible(!deleteModalVisible);
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
                <ModalAddContact
                    firstName={firstName}
                    setFirstName={setFirstName}
                    lastName={lastName}
                    setLastName={setLastName}
                    age={age}
                    setAge={setAge}
                    photo={photo}
                    setPhoto={setPhoto}
                    modalVisible={modalVisible}
                    setAdd={setAdd}
                    addContact={addContact}
                />
                <ModalEditContact
                    firstName={firstName}
                    setFirstName={setFirstName}
                    lastName={lastName}
                    setLastName={setLastName}
                    age={age}
                    setAge={setAge}
                    photo={photo}
                    setPhoto={setPhoto}
                    editModalVisible={editModalVisible}
                    setEdit={setEdit}
                    editContact={editContact}
                    id={id}
                />
                <ModalDeleteContact
                    deleteModalVisible={deleteModalVisible}
                    setDelete={setDelete}
                    deleteContact={deleteContact}
                    id={id}
                />
                <ModalDetailContact
                    item={item}
                    setDetail={setDetail}
                    detailModalVisible={detailModalVisible}
                />
                <Text style={styles.mainText}>HEROKUAPP</Text>
                <Text style={styles.textContacts}>
                    Contacts
                </Text>
                <FlatList
                    data={listContact.data}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={itemSeparator}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => detailingContact(item)}
                            >
                                <View style={styles.contactCard}>
                                    <Image
                                        source={{
                                            uri: item.photo == "N/A" ?
                                                'https://ipartspares.com/wp-content/uploads/2019/12/no-photo.png'
                                                :
                                                item.photo
                                        }}
                                        style={styles.imageContact} />
                                    <View style={styles.nameAge}>
                                        <Text style={styles.detailContact}>{item.firstName} {item.lastName}</Text>
                                        <Text style={styles.detailContact}>{item.age} y.o</Text>
                                    </View>
                                    <View style={{ flexDirection: "column" }}>
                                        <IconButton
                                            icon="pencil-outline"
                                            color={"#FFF"}
                                            size={20}
                                            onPress={() => editingContact(item.id)}
                                        />
                                        <IconButton
                                            icon="trash-can-outline"
                                            color={"#FFF"}
                                            size={20}
                                            onPress={() => deletingContact(item.id)}
                                        />
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
                <ActivityIndicator
                    size={"large"}
                    color={"#FFF"}
                />
            </View>
    )
}
