import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Input from '../../components/input';
import Botao from '../../components/button';
import Header from '../../components/header';
import CarrinhoContext from '../../context/CarrinhoContext';
import Styles from './style';
import axios from 'axios';
import {Appbar} from 'react-native-paper';
import {Icon} from 'react-native-elements';

const Home = () => {
  const [nome, setNome] = useState();
  const [produto, setProduto] = useState([]);
  const [num, setNum] = useState(0);
  const [categoria, setCategoria] = useState([]);
  const [mostrar, setMostrar] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const {addProduto} = useContext(CarrinhoContext);

  useEffect(() => {
    getProdutos();
  }, [setProduto]);

  function aumentarNum() {
    setNum(num + 1);
  }

  getProdutos = num => {
    setIsLoading(true);
    axios
      .get(`https://ecommerceflascododragao.herokuapp.com/produtos`)
      // Vamos ter que trabalhar no page e no size ()=>getP
      .then(response => {
        //console.log(response.data);
        setProduto(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setIsLoading(false);
      });
  };
  function listarAirline() {
    console.log(nome);
    setMostrar(false);
    axios
      .get(`https://ecommerceflascododragao.herokuapp.com/produtos`)
      .then(response => {
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].categoria.nome == nome) {
            console.log(response.data[i]);
            setProduto([...produto, response.data[i]]);
            console.log(produto);
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <Appbar.Header style={Styles.busca}>
          <Appbar.Content />
          <Input texto={[nome, setNome]} />
          <Appbar.Action icon="magnify" onPress={listarAirline} />
        </Appbar.Header>

        {isLoading ? (
          <View style={Styles.containerAct}>
            <ActivityIndicator size="large" color="#5500dc" />
          </View>
        ) : (
          //{mostrar
          <FlatList
            onScrollBeingDrag={aumentarNum}
            data={produto}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={Styles.listItem}>
                <Image style={Styles.image} source={{uri: item.url}} />
                <View style={Styles.productInfo}>
                  <Text style={Styles.text}>Nome: {item.nome}</Text>
                  <Text style={Styles.text}>Valor: {item.valorUnitario}</Text>
                  <Text style={Styles.text}>
                    Categoria: {item.categoria.nome}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => addProduto({item})}>
                  <Icon
                    name="add-circle-outline"
                    type="ionicon"
                    size={36}
                    color="#f54a00"
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
