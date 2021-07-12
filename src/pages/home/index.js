import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
  FlatList,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';
import Input from '../../components/input';
import Botao from '../../components/button';
import Header from '../../components/header';
import Styles from './style';
import axios from 'axios'
import { Appbar } from 'react-native-paper';


const Home = () => {
  const [nome, setNome] = useState();
  const [produto, setProduto] = useState([]);
  const [num, setNum] = useState(0);
  const [categoria, setCategoria] = useState([]);
  const [mostrar, setMostrar] = useState(true);




  useEffect(() => {
    getProdutos();
  }, [setProduto]);

  function aumentarNum() {
    setNum(num + 1)
  }

  getProdutos = (num) => {
    axios.get(`https://ecommerceflascododragao.herokuapp.com/produtos`)
      // Vamos ter que trabalhar no page e no size ()=>getP
      .then((response) => {
        //console.log(response.data);
        setProduto(response.data);
      }).catch(function (error) {
        console.log(error);
      });

  }
  function listarAirline() {
    console.log(nome)
    setMostrar(false);
    axios.get(`https://ecommerceflascododragao.herokuapp.com/produtos`).then((response) => {

      for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].categoria.nome == nome) {
          console.log(response.data[i])
          setCategoria(response.data[i]);
          console.log(categoria);
        }
      }

    }).catch(function (error) {
      console.log(error);
    });
  }

  function MyComponent() {
    return (

      <Appbar.Header style={Styles.busca}>
        <Appbar.Content />
        <Input
          texto={[nome, setNome]}
        />
        <Appbar.Action icon="magnify" onPress={listarAirline} />
      </Appbar.Header>
    )
  };

  return (
    <SafeAreaView>
      <Header/>
      <MyComponent />

      {mostrar &&

        <FlatList
          onScrollBeingDrag={aumentarNum}
          data={produto}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>Nome: {item.nome}</Text>
              <Text>Valor: {item.valorUnitario}</Text>
              <Text>Categoria: {item.categoria.nome}</Text>
              <Image
                style={{
                  width: 300,
                  height: 100,
                  resizeMode: 'contain'
                }}
                source={{
                  uri: item.url,
                }} />
            </View>
          )}
        />}

      {!mostrar &&
        < FlatList
          onScrollBeingDrag={aumentarNum}
          data={categoria}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>Nome: {item.nome}</Text>
              <Text>Valor: {item.valorUnitario}</Text>
              <Text>Categoria: {item.categoria.nome}</Text>
              <Image
                style={{
                  width: 300,
                  height: 100,
                  resizeMode: 'contain'
                }}
                source={{
                  uri: item.url,
                }} />
            </View>
          )}
        />}

    </SafeAreaView >
  );
};


export default Home;
