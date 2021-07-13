import React, { useState } from 'react';
import { View, SafeAreaView, Button, StatusBar, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import Input from '../../components/input';
import Styles from './style';
import Header from '../../components/header';
import Botao from '../../components/button';
import styles from '../../components/header/styles';
import BotaoLogin from '../../components/buttonLogin';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [logado, setLogado] = useState(false);

  const user = ['lucas', 'vanessa', 'paixao', 'mari', 'julia', 'leo', 'matheus', 'joao']
  const sen = 12345;

  // const logar =() => {
  //   alert(username);
  //   alert(senha);
  // }

  return (
      <View style={ Styles.containerLeo }>
        <StatusBar hidden />

        {/* <Image style={{width:300, height:200}} source={'./'} /> */}

        <TextInput placeholder="Seu Username..." style={Styles.textInput} onChangeText={text=>setUsername(text)} />
        <TextInput secureTextEntry={true} placeholder="Sua Senha..." style={Styles.textInput} onChangeText={text=>setSenha(text)} />

        <BotaoLogin
          title={'★ LOGIN ★'}
          handlePress={() => {
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
              alert('★ Username ou senha incorreta ★');
          }}>
        </BotaoLogin>

        {/* <TouchableOpacity onPress={()=>logar()}>
          <Text>★LOGIN★</Text>
        </TouchableOpacity> */}

      </View>
  );
};
export default Login;
