import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import Input from '../../components/input';
import Botao from '../../components/button';
import Header from '../../components/header';
import Styles from './style';


const Home = () => {
  const [nome, setNome] = useState();

  return (
    <SafeAreaView>
      <Header />
      <View style={Styles.container}>
        <View>
          <Input
            // style={stylesinput}
            onChangeText={nome => setNome(nome)}
            value={nome}
            placeholder="Nome"
          />
        </View>
        <View style={Styles.containerBotao}>
          <Botao
            // style={stylesbutton}
            title={'Buscar'}
            onPress={() => { }}>
          </Botao>
        </View>
      </View>
      <FlatList />
    </SafeAreaView>
  );
};
export default Home;
