import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  FlatList,
  View
} from 'react-native';
import Botao from '../../components/button';
import Header from '../../components/header';

const Carrinho = () => {
  const context = useContext(CarrinhoContext);
    console.log(context.produto);

    const valorTotal = context.produto.reduce((total, prod) => total + prod.item.valorUnitario, 0).toFixed(2);

return (
  <SafeAreaView>
    <Text> Carrinho </Text>
    <FlatList
            onScrollBeingDrag={aumentarNum}
            data={produto}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={Styles.listItem}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 8
                  }}
                  source={{ uri: item.url }}
                />
                <View style={Styles.productInfo}>
                  <Text style={Styles.listItemText}>Nome: {item.nome}</Text>
                  <Text style={Styles.listItemText}>Valor: {item.valorUnitario}</Text>
                  <Text style={Styles.listItemText}>Categoria: {item.categoria.nome}</Text>
                </View>
              </View>
            )
  </SafeAreaView>
);
};
export default Carrinho;
