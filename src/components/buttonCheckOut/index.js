import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Styles from './style';

const BotaoCheckout = ({title, handlePress}) => {

  const checkout = () => {
    alert('Compra finalizada com sucesso!');
}

return (
    <View style={Styles.container}>
      <TouchableOpacity
      onPress={() => checkout()}
      >
        <View style={Styles.buttonLogin}>
          <Text style={Styles.textLogin}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BotaoCheckout;
