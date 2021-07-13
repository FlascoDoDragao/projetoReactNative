import React, {useContext, useState} from 'react';
import {View, SafeAreaView, Button} from 'react-native';
import Input from '../../components/input';
import Styles from './style';
import Header from '../../components/header';
import Botao from '../../components/button';
import LoginContext from '../../context/LoginContext';

const Login = ({navigation}) => {
  const [username, setUsername] = useState();
  const [senha, setSenha] = useState();
  const [logado, setLogado] = useState(false);
  const contextLogin = useContext(LoginContext);
  const user = [
    'lucas',
    'vanessa',
    'paixao',
    'mari',
    'julia',
    'leo',
    'matheus',
    'joao',
  ];
  const sen = 12345;

  return (
    <SafeAreaView>
      <Header />
      <View style={{flex: 1, paddingTop: 20}}>
        <View style={Styles.container}>
          <View style={Styles.container2}>
            <Input
              texto={[username, setUsername]}
              value={username}
              placeholder="Username"
            />
          </View>
          <View style={Styles.container2}>
            <Input
              texto={[senha, setSenha]}
              value={senha}
              placeholder="Senha"
              secureTextEntry={true}
            />
          </View>
          <View style={Styles.container2}>
            <Botao
              title={'Logar'}
              handlePress={() => {
                var cont = 0;
                for (var i = 0; i < user.length; i++) {
                  if (user[i] == username) cont++;
                }
                if (senha == sen) cont++;

                if (cont == 2) {
                  setLogado(true);
                  // contextLogin(true);
                  navigation.navigate('Carrinho');
                } else alert('Username ou senha incorreta');
              }}></Botao>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Login;
