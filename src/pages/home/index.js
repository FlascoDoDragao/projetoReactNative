import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import stylesinput from '../../components/input';
import stylesbutton from '../../components/button';

const Home = () => {
  const [nome, setNome] = useState();

  return (
    <SafeAreaView>
      <View>
        <TextInput
          // style={stylesinput}
          onChangeText={nome => setNome(nome)}
          value={nome}
          placeholder="Nome"
        />
        <TouchableHighlight
          // style={stylesbutton}
          onPress={() => {}}>
          <Text>Buscar</Text>
        </TouchableHighlight>
      </View>
      <FlatList />
    </SafeAreaView>
  );
};
export default Home;
