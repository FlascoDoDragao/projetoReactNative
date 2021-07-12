import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import Input from '../../components/input';
import Botao from '../../components/button';
import Styles from './style';

const Cadastro = () => {
  const [username, setUsername] = useState();
  const [senha, setSenha] = useState();

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
      {/* <Header /> */}
      <View style={Styles.container}>
      <View style={Styles.container2}>
        <Input
          // style={stylesinput}
          texto={[username,setUsername]}
          placeholder="Username"
        />
        </View>
        <View style={Styles.container2}>
        <Input
          // style={stylesinput}
          texto={[senha,setSenha]}
          placeholder="Senha"
          secureTextEntry={true}
        />
        </View>
        <View style={Styles.container2}>
        <Botao
          // style={stylesbutton}
          title={'Cadastrar'}
          onPress={() => navigation.navigate('Carrinho')}>
        </Botao>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Cadastro;
