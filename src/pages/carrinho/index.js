import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import stylesbutton from '../../components/button';
import Header from '../../components/header';

const Home = () => {
  return (
    <SafeAreaView>
      <Header />
      <FlatList />
      <View>
        <TouchableHighlight
          // style={stylesbutton.button}
          onPress={() => {}}>
          <Text>Comprar</Text>
        </TouchableHighlight>
      </View>
      <View></View>
    </SafeAreaView>
  );
};
export default Home;
