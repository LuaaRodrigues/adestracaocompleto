import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import TelaInicial from './screens/TelaInicial';
import Cadastro from './screens/Cadastro';
import AulaAoVivo from './screens/AulaAoVivo';
import Menu from './screens/Menu';
import Conquistas from './screens/Conquistas';
import Perfil from './screens/Perfil';
import FaleAdestrador from './screens/FaleAdestrador';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TelaInicial">
          <Stack.Screen name="TelaInicial" component={TelaInicial} options={{ title: 'Adestracao' }} />
          <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro' }} />
          <Stack.Screen name="AulaAoVivo" component={AulaAoVivo} options={{ title: 'Aula ao Vivo' }} />
          <Stack.Screen name="Menu" component={Menu} options={{ title: 'Menu' }} />
          <Stack.Screen name="Conquistas" component={Conquistas} options={{ title: 'Conquistas' }} />
          <Stack.Screen name="Perfil" component={Perfil} options={{ title: 'Perfil' }} />
          <Stack.Screen name="FaleAdestrador" component={FaleAdestrador} options={{ title: 'Fale com Adestrador' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

