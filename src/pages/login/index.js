import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button
} from 'react-native';
import Input from '../../components/input';
import Styles from './style';
import Header from '../../components/header';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState();
  const [senha, setSenha] = useState();
  const [logado, setLogado] = useState(false);

  const user = ['lucas', 'vanessa', 'paixao', 'mari', 'julia', 'leo', 'matheus', 'joao']
  const sen = 12345;

  return (
    <SafeAreaView>
      <Header />
      <View style={{ flex: 1, paddingTop: 20 }}>
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
            <Button
              title={'Logar'}
              onPress={() => {
                var cont = 0;
                for (var i = 0; i < user.length; i++) {
                  if (user[i] == username)
                    cont++;
                }
                if (senha == sen)
                  cont++;

                if (cont == 2) {
                  setLogado(true);
                  navigation.navigate('Carrinho')
                }
                else
                  alert('Username ou senha incorreta');
              }}>
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Login;
