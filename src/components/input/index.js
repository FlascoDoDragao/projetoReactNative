import React, {useState} from "react";
import { Text, TextInput, View } from "react-native";
import Styles from './style';

const Input = () => {
  const [text, onChangeText] = useState();

  return (
    <View style={Styles.container}>
      <TextInput
        style={Styles.input}
        onChangeText={text => onChangeText(text)}
        value={text}
      />
      <Text style={Styles.texto}></Text>
    </View>
  );
};


export default Input;
