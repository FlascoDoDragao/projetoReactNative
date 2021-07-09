import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import stylesinput from '../../components/input';
import stylesbutton from '../../components/button';
import Header from '../../components/header';

const Home = () => {
  const [nome, setNome] = useState();

  return (
    <SafeAreaView>
      <View>
        <Header />
        <TextInput
          // style={stylesinput}
          onChangeText={nome => setNome(nome)}
          value={nome}
          placeholder="Nome"
        />
        <TouchableHighlight
          // style={stylesbutton}
          onPress={() => { }}>
          <Text>Buscar</Text>
        </TouchableHighlight>
      </View>
      <View></View>
    </SafeAreaView>
  );
};
export default Home;
