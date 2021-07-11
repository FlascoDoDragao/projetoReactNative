import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import Botao from '../../components/button';
import Header from '../../components/header';

const Home = () => {
  return (
    <SafeAreaView>
      <Header />
      <FlatList />
      <View>
        <Botao
          // style={stylesbutton.button}
          title={'Comprar'}
          onPress={() => {}}>

        </Botao>
      </View>
      <View></View>
    </SafeAreaView>
  );
};
export default Home;
