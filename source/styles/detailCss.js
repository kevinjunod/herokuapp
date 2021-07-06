import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        justifyContent: "center",
        backgroundColor: "#303030"
    },
    centeredView: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 55,
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
    textInputModal: {
        backgroundColor: "#ECECEC",
        width: Dimensions.get('window').width / 2,
        color: '#000',
    },
    contentDetail: {
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    styleImage: {
        width: 150,
        height: 150,
        borderRadius: 20,
        alignSelf: 'center'
    },
    contentText: {
        alignSelf: 'center',
        paddingVertical: 5
    },
})

export { styles }