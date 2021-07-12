import React, {useState} from "react";
import { Text, TextInput, View } from "react-native";
import Styles from './style';

const Input = (props) => {
  const [texto, setTexto] = props.texto;

  return (
    <View style={Styles.container}>
      <TextInput
        style={Styles.input}
        onChangeText={setTexto}
        value={texto}
      />
      <Text style={Styles.texto}></Text>
    </View>
  );
};




export default Input;
