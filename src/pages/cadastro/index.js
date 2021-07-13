import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import Input from '../../components/input';
import Botao from '../../components/button';
import Styles from './style';

const Cadastro = () => {
  const [nome, setNome] = useState();
  const [sobrenome, setSobrenome] = useState();
  const [dataNasc, setDataNasc] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
      {/* <Header /> */}
      <View style={Styles.container}>
        <View style={Styles.container2}>
          <Input
            // style={stylesinput}
            texto={[username, setUsername]}
            placeholder="Digite seu nome"
          />
        </View>
        <View style={Styles.container2}>
          <Input
            // style={stylesinput}
            texto={[senha, setSenha]}
            placeholder="Digite o seu último nome"
          />
        </View>
        <View style={Styles.container2}>
          <Input
            // style={stylesinput}
            texto={[senha, setSenha]}
            placeholder="Digite o seu último nome"
          />
        </View>
        <View style={Styles.container2}>
          <Input
            // style={stylesinput}
            texto={[senha, setSenha]}
            placeholder="Digite sua data de nascimento"
          />
        </View>
        <View style={Styles.container2}>
          <Input
            // style={stylesinput}
            texto={[senha, setSenha]}
            placeholder="Digite seu melhor email"
          />
        </View>
        <View style={Styles.container2}>
          <Input
            // style={stylesinput}
            texto={[senha, setSenha]}
            placeholder="Digite uma senha"
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
        {/* <View>
          <Text
            style={Styles.textCadastro}
            onPress={() => navigation.navigate('Cadastro')}>
            Efetuar cadastro
          </Text>
        </View> */}
      </View>
    </SafeAreaView>
  );
};
export default Cadastro;
