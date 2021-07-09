<<<<<<< HEAD
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
=======
import React from "react";
import { Text, TextInput, View } from "react-native";
import Styles from './style';

const Input = () => {
    const [text, onChangeText] = React.useState("Socorro!!");

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
>>>>>>> ad76d4bfe136e0af79fa480408980d5965efb0c8
