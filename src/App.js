import 'react-native-gesture-handler';

import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from './pages/login';
import Home from './pages/home';
import Carrinho from './pages/carrinho';
import Intermediario from './pages/intermediario';
import Cadastro from './pages/cadastro';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function IntermediarioStack() {
  return (
    <Stack.Navigator
      initialRouteName="Intermediario"
      screenOptions={{
        headerStyle: {backgroundColor: '#392273'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="Intermediario"
        component={Intermediario}
        options={{title: 'União de Hogwarts'}}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{title: 'União de Hogwarts'}}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{title: 'Cadastrar'}}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      {/* essa parte fica no final da tela */}
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#f54a00',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Iní­cio',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Intermediario"
          component={IntermediarioStack}
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-circle" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Carrinho"
          component={Carrinho}
          options={{
            tabBarLabel: 'Carrinho',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
