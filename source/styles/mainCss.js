import { StyleSheet, Dimensions } from 'react-native';

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
        backgroundColor: "#ECECEC",
        width: Dimensions.get('window').width / 2,
        color: '#000',
    },
    textContacts: {
        marginLeft: 10,
        color: "#FFF",
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 1
    },
    contactCard: {
        flexDirection: "row",
        padding: 10,
        alignContent: "space-between",
        justifyContent: 'space-between'
    },
    imageContact: {
        width: 75,
        height: 75,
        borderRadius: 20
    },
    nameAge: {
        flexDirection: "column",
        flexGrow: 1,
        paddingLeft: 15
    }
})

export { styles }