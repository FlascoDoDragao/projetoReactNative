import React, { useContext, useState } from 'react';
import { View, SafeAreaView, Button, Text, Image, StatusBar } from 'react-native';
import Input from '../../components/input';
import styles from './style';
import Header from '../../components/header';
import CarrinhoContext from '../../context/CarrinhoContext';
import BotaoCheckout from '../../components/buttonCheckOut';

const CheckOut = ({ navigation }) => {

    const context = useContext(CarrinhoContext);

    const { delProduto } = useContext(CarrinhoContext);

    const valorTotal = context.produtos
        .reduce((total, prod) => total + prod.item.valorUnitario, 0)
        .toFixed(2);

    const checkout = () => {
        alert('Compra finalizada com sucesso!');
    }

    return (
        <View style={styles.container}>
            <StatusBar hidden />
                <Image style={{width:300, height:200, marginBottom: 15}} source={{ uri: 'https://logosmarcas.net/wp-content/uploads/2020/12/Hogwarts-Logo.png'}} />
                    <Text style={styles.title}>Finalizar Compra</Text>

                    <View style={{ marginTop: 50 }}>
                        <BotaoCheckout
                            color='#392273'
                            title={'★ Comprar ★'}
                            onPress={() => checkout()}
                        >
                        </BotaoCheckout>
                    </View>
                </View>
    );
};
export default CheckOut;