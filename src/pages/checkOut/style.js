import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5500dc',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        minHeight: 650,
        elevation: 40,
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
        color: '#c3b8db',
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 20,
        fontSize: 30,
        textAlign: 'center',
    },
    text: {
        padding: 10,
        fontSize: 20,
        color: '#c3b8db',
    }
});

export default styles;
