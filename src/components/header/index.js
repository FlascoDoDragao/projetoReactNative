import React from 'react';
import { View, Text } from 'react-native'
import styles from './styles';

const Header = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>União de Hogwarts</Text>
        </View>
    );
}
export default Header;