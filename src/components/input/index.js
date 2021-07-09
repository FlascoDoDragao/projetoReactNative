import React from 'react';
import {Text, TextInput, View} from 'react-native';
import Styles from './style';

const Input = () => {
  const [text, onChangeText] = React.useState('Socorro!!');

  return (
    <View style={Styles.container}>
      <TextInput
        style={Styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Text style={Styles.text}></Text>
    </View>
  );
};

export default Input;
