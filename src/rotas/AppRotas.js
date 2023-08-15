import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../telas/Home';
import Curso from '../telas/Curso';
import Perfil from '../telas/Perfil';

export default function AppRotas() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Curso" component={Curso} />
            <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}