import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowcontainer: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 20,
        marginRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 30,
        textAlign: 'center',
    },
    text: {
        padding: 10,
        fontSize: 20,
        color: '#101010',
    },
    container: {
        backgroundColor: '#ddd',
        marginHorizontal: 20,
        minHeight: 350,
        elevation: 40,
    },
    container2: {
        flex: 1,
    },
    textCadastro: {
        color: '#f54a00',
    }
});

export default styles;
