import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  Button,
} from 'react-native';
import Botao from '../../components/button';
import Header from '../../components/header';
import CarrinhoContext from '../../context/CarrinhoContext';
import LoginContext from '../../context/LoginContext';
import styles from './style';
import { Icon } from 'react-native-elements';


const Carrinho = ({ navigation }) => {
  const context = useContext(CarrinhoContext);
  const contextLogin = useContext(LoginContext);

  console.log(context.produtos);
  const { delProduto } = useContext(CarrinhoContext);

  const valorTotal = context.produtos
    .reduce((total, prod) => total + prod.item.valorUnitario, 0)
    .toFixed(2);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Text style={styles.title}>Itens no Carrinho</Text>
      <FlatList
        data={context.produtos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.listItem}>
              <Image
                style={styles.productImage}
                source={{ uri: item.item.url }}
              />
              <View style={styles.productInfo}>
                <Text>Nome: {item.item.nome}</Text>
                <Text>Valor: {item.item.valorUnitario}</Text>
                <Text>Categoria: {item.item.categoria.nome}</Text>
                <Text>Descrição: {item.item.descricao}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => delProduto(item.item.id)}>
                  <Icon name="trash" type="ionicon" size={20} color="#f54a00" />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
      <View>
        <Text style={styles.total}>Total: {valorTotal}</Text>
      </View>
      <View style={styles.containerBotao}></View>

      <Button
        title={'Comprar'}
        onPress={() => navigation.navigate('Login')}
        color='#392273'
      ></Button>
    </SafeAreaView>
  );
};

export default Carrinho;
