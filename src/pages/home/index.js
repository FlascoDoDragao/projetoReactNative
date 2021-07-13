import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Input from '../../components/input';
import Header from '../../components/header';
import CarrinhoContext from '../../context/CarrinhoContext';
import FavoritoContext from '../../context/FavoritoContext';
import Styles from './style';
import axios from 'axios';
import { Appbar } from 'react-native-paper';
import { Icon } from 'react-native-elements';

const Home = () => {
  const [nome, setNome] = useState();
  const [produto, setProduto] = useState([]);
  const [categoria, setCategoria] = useState([]);
  const [mostrar, setMostrar] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const { addProduto } = useContext(CarrinhoContext);

  const { favProduto } = useContext(FavoritoContext);

  useEffect(() => {
    console.log('oi');
    getProdutos();
  }, [setProduto]);

  getProdutos = () => {
    setIsLoading(true);
    axios
      .get(`https://ecommerceflascododragao.herokuapp.com/produtos`)
      .then(response => {
        setProduto(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setIsLoading(false);
      });
  };
  function listarCategoria() {
    console.log('nome:' + nome);
    setIsLoading(true);
    setMostrar(false);
    var cat = [];
    var cont = 0;
    if (nome != '') {
      axios
        .get(`https://ecommerceflascododragao.herokuapp.com/produtos`)
        .then(response => {
          // console.log(response.data);
          for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].categoria.nome == nome) {
              setIsLoading(false);
              cat[cont] = response.data[i];
              cont++;
            }
          }
          setCategoria(cat);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setProduto([]);
      getProdutos();
    }
  }

  return (
    <SafeAreaView style={{ paddingBottom: 113 }}>
      <Header />
      <Appbar.Header style={Styles.busca}>
        <Appbar.Content />
        <Input texto={[nome, setNome]} />
        <Appbar.Action icon="magnify" onPress={listarCategoria} />
      </Appbar.Header>

      {isLoading ? (
        <View style={Styles.containerAct}>
          <ActivityIndicator size="large" color="#5500dc" />
        </View>
      ) : mostrar == true ? (
        <FlatList
          data={produto}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={Styles.listItem}>
              <Image style={Styles.productImage} source={{ uri: item.url }} />
              <View style={Styles.productInfo}>
                <Text style={Styles.text}>Nome: {item.nome}</Text>
                <Text style={Styles.text}>Valor: {item.valorUnitario}</Text>
                <Text style={Styles.text}>
                  Categoria: {item.categoria.nome}
                </Text>
                <Text style={Styles.text}>Descrição: {item.descricao}</Text>
              </View>
              <TouchableOpacity onPress={() => addProduto({ item })}>
                <Icon
                  name="add-circle-outline"
                  type="ionicon"
                  size={36}
                  color="#f54a00"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => favProduto({ item })}>
                <Icon name="star" type="ionicon" size={32} color="#f54a00" />
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <FlatList
          data={categoria}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={Styles.listItem}>
              <Image style={Styles.productImage} source={{ uri: item.url }} />
              <View style={Styles.productInfo}>
                <Text style={Styles.text}>Nome: {item.nome}</Text>
                <Text style={Styles.text}>Valor: {item.valorUnitario}</Text>
                <Text style={Styles.text}>
                  Categoria: {item.categoria.nome}
                </Text>
                <Text style={Styles.text}>Descrição: {item.descricao}</Text>
              </View>
              <TouchableOpacity onPress={() => addProduto({ item })}>
                <Icon
                  name="add-circle-outline"
                  type="ionicon"
                  size={36}
                  color="#f54a00"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => favProduto({ item })}>
                <Icon
                  name="star"
                  type="ionicon"
                  size={32}
                  color="#f54a00"
                />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
