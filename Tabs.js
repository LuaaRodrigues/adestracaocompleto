import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from './Menu';
import Perfil from './Perfil';
import Conquistas from './Conquistas';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Tabs({ route }) {
  const usuario = route.params?.usuario;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#6B5B95',
        tabBarInactiveTintColor: '#ccc',
        tabBarStyle: { backgroundColor: '#F9F6F0' },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Menu') iconName = 'home';
          if (route.name === 'Perfil') iconName = 'person';
          if (route.name === 'Conquistas') iconName = 'ribbon';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        initialParams={{ usuario }}
      />
      <Tab.Screen name="Conquistas" component={Conquistas} />
    </Tab.Navigator>
  );
}
