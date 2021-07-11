import React from 'react';
import { View, Text } from 'react-native'
import styles from './styles';

import MyComponent from '../buscar';

const Header = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>União de Hogwarts</Text>
            <MyComponent></MyComponent>
        </View>
    );
}
export default Header;