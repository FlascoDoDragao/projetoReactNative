import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Input from '../../components/input';
import Botao from '../../components/button';
import Styles from './styles';
const Intermediario = ({navigation}) => {
    const [username, setUsername] = useState();
    const [senha, setSenha] = useState();
  
    return (
      <SafeAreaView style={{flex:1, paddingTop: 20}}>
        {/* <Header /> */}
        <View style={Styles.container}>
          <View style={Styles.container2}>
            <Input
              // style={stylesinput}
              onChangeText={username => setUsername(username)}
              value={username}
              placeholder="Username"
            />
          </View>
          <View style={Styles.container2}>
            <Input
              // style={stylesinput}
              onChangeText={senha => setSenha(senha)}
              value={senha}
              placeholder="Senha"
              secureTextEntry={true}
            />
          </View>
          <View style={Styles.container2}>
            <Botao
              title={'Logar'}
              // style={stylesbutton}
              onPress={() => navigation.navigate('Carrinho')}>
  
            </Botao>
          </View>
          <View>
            <Text style={Styles.textCadastro}>
              Efetuar cadastro
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  };
export default Intermediario;
