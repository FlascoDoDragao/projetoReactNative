import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import stylesinput from '../../components/input';
import stylesbutton from '../../components/button';
import Header from '../../components/header';

const Cadastro = () => {
  const [username, setUsername] = useState();
  const [senha, setSenha] = useState();

  return (
    <SafeAreaView>
      <Header />
      <View>
        <TextInput
          // style={stylesinput}
          onChangeText={username => setUsername(username)}
          value={username}
          placeholder="Username"
        />
        <TextInput
          // style={stylesinput}
          onChangeText={senha => setSenha(senha)}
          value={senha}
          placeholder="Senha"
          secureTextEntry={true}
        />
        <TouchableHighlight
          // style={stylesbutton}
          onPress={() => navigation.navigate('Carrinho')}>
          <Text>Cadastrar</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};
export default Cadastro;
