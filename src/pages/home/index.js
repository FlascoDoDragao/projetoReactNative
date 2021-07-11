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
         
        </View>
      </View>
      <FlatList />
    </SafeAreaView>
  );
};
export default Home;
