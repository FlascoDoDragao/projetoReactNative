import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Styles from './style';

const Botao = ({ title, onPress }) => {

  return (
    <View style={Styles.container}>
      <TouchableHighlight onPress={onPress}>
        <View style={Styles.button}>
          <Text style={Styles.text}>{title}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};


export default Botao;
