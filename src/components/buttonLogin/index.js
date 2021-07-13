import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Styles from './style';

const BotaoLogin = ({title, handlePress}) => {
  return (
    <View style={Styles.containerL}>
      <TouchableOpacity
      onPress={handlePress}
      >
        <View style={Styles.buttonLogin}>
          <Text style={Styles.textLogin}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BotaoLogin;
