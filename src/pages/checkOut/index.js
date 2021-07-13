import React, { useContext, useState } from 'react';
import { View, SafeAreaView, Button, Text } from 'react-native';
import Input from '../../components/input';
import styles from './style';
import Header from '../../components/header';
import CarrinhoContext from '../../context/CarrinhoContext';

const CheckOut = ({ navigation }) => {

    const context = useContext(CarrinhoContext);

    const { delProduto } = useContext(CarrinhoContext);

    const valorTotal = context.produtos
        .reduce((total, prod) => total + prod.item.valorUnitario, 0)
        .toFixed(2);

    return (
        <SafeAreaView>
            <Header />
            <View style={{ flex: 1, paddingTop: 20 }}>
                <View style={styles.container}>
                    <View style={styles.container2}>
                        <Text style={styles.title}>Finalizar Compra</Text>
                        <View style={{ marginTop: 50 }}>
                            <Button color='#392273'
                                title={'Comprar'}
                                onPress={() => {
                                    alert('Compra finalizada com sucesso');
                                }
                                }></Button>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};
export default CheckOut;