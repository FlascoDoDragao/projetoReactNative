import React from "react";
import { Text, TextInput, View } from "react-native";
import Styles from './style';

const Input = ({placeholder}) => {
    const [text, onChangeText] = React.useState({placeholder});

    return (
        <View style={Styles.container}>
            <TextInput
                style={Styles.input}
                onChangeText={onChangeText}
                placeholder={placeholder}
            />
            <Text style={Styles.text}></Text>
        </View>
    );
};


export default Input;
