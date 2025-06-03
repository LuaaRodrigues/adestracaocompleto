import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './screens/TelaInicial';
import AulaAoVivo from './screens/AulaAoVivo';
import Cadastro from './screens/Cadastro';
import Conquistas from './screens/Conquistas';
import FaleAdestrador from './screens/FaleAdestrador';
import Menu from './screens/Menu';
import Perfil from './screens/Perfil';
import Tabs from './screens/Tabs';
import UsuariosList from './screens/UsuariosList';
import Login from './screens/Login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="AulaAoVivo" component={AulaAoVivo} />
        <Stack.Screen name="Conquistas" component={Conquistas} />
        <Stack.Screen name="FaleAdestrador" component={FaleAdestrador} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="UsuariosList" component={UsuariosList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}