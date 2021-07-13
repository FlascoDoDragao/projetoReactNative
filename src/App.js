import 'react-native-gesture-handler';

import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CarrinhoProvider from './context/CarrinhoProvider';
import FavoritoProvider from './context/FavoritoProvider';

import Login from './pages/login';
import Home from './pages/home';
import Carrinho from './pages/carrinho';
import Favorito from './pages/favoritos';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <CarrinhoProvider>
      <FavoritoProvider>
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
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Login"
              component={Login}
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
            <Tab.Screen
              name="Favoritos"
              component={Favorito}
              options={{
                tabBarLabel: 'Favoritos',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="star" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </FavoritoProvider>
    </CarrinhoProvider>
  );
}
export default App;
