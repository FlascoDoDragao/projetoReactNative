import React, { useState } from 'react';
import { View, StatusBar, Image, Text, TextInput } from 'react-native';
import Styles from './style';
import BotaoLogin from '../../components/buttonLogin';



 const Login = ({ navigation }) => {
   const [username, setUsername] = useState('');
   const [senha, setSenha] = useState('');
   const [logado, setLogado] = useState(false);

   const user = [ 'lucas', 'vanessa', 'paixao', 'mari', 'julia', 'leo', 'matheus', 'joao'];
   const sen = 12345;

   return (
       <View style={ Styles.containerLeo }>
         <StatusBar hidden />

         {/* <Image style={{width:300, height:200}} source={require('./image/Capturar.JPG')} /> */}
         <Image style={{width:300, height:200, marginBottom: 15}} source={{ uri: 'https://logosmarcas.net/wp-content/uploads/2020/12/Hogwarts-Logo.png'}} />
         <TextInput placeholder="Seu Username..." style={Styles.textInput} onChangeText={text=>setUsername(text)} />
         <TextInput secureTextEntry={true} placeholder="Sua Senha..." style={Styles.textInput} onChangeText={text=>setSenha(text)} />

         <BotaoLogin
           title={'★ ENTRAR ★'}
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
               navigation.navigate('CheckOut')
             }
             else
               alert('★ Username ou senha incorreta ★');
           }}>
         </BotaoLogin>

       </View>
   );
 };
 export default Login;