import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import Botao from '../../components/button';
import Header from '../../components/header';
import CarrinhoContext from '../../context/CarrinhoContext';
import styles from './style';

const Carrinho = () => {
  const context = useContext(CarrinhoContext);
  console.log(context.produtos);

  const valorTotal = context.produtos
    .reduce((total, prod) => total + prod.item.valorUnitario, 0)
    .toFixed(2);
  return (
    <SafeAreaView>
      <Header />
      <Text style={styles.title}>Itens no Carrinho</Text>
      <FlatList
        data={context.produtos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.rowcontainer}>
              <Text style={styles.text}>Nome: {item.item.nome}</Text>
              <Text style={styles.text}>Valor: {item.item.valorUnitario}</Text>
            </View>
          );
        }}
      />
      <View>
        <Text style={styles.total}>Total: {valorTotal}</Text>
      </View>
      <View>
        <Botao
          // style={stylesbutton.button}
          title={'Comprar'}
          onPress={() => { }}></Botao>
      </View>
    </SafeAreaView>
  );
};
export default Carrinho;
