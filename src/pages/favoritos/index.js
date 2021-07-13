import React, {useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';
import Header from '../../components/header';
import FavoritoContext from '../../context/FavoritoContext';
import styles from './style';
import { Icon } from 'react-native-elements';

const favoritos = () => {
    const context = useContext(FavoritoContext);
    console.log(context.produtos);
    const { delProduto } = useContext(FavoritoContext);

  return (
    <SafeAreaView>
      <Header />
      <Text style={styles.title}>Itens favoritos</Text>
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
                  <Icon
                    name="trash"
                    type="ionicon"
                    size={20}
                    color="#f54a00"
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};
export default favoritos;
