import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Header from '../../components/header';
import styles from './styles';

const Intermediario = ({navigation}) => {
  return (
    <View>
      {/* <Header /> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cadastro')}>
        <Text>Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Intermediario;
