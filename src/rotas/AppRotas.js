import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from 'react-native-vector-icons'
import CursoRotas from './CursoRotas';
import HomeRotas from './HomeRotas';
import PerfilRotas from './PerfilRotas';

//https://feathericons.com/

export default function AppRotas() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" barStyle={'light-content'} translucent={true} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: true,
          tabBarActiveTintColor: '#ff0534',
          tabBarInactiveTintColor: 'white',
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarStyle: {
            backgroundColor: "black",
            borderTopWidth: 0,
          },
          headerStyle: {
            backgroundColor: "black",
            borderBottomWidth: 0,
          },
          headerTintColor: '#fff',
          //headerTransparent: true,
          tabBarIcon: ({ color }) => {
            if (route.name === 'Home') {
              return <Feather name="home" size={18} color={color} />
            } else if (route.name === 'Curso') {
              return <Feather name="play" size={18} color={color} />
            } else {
              return <Feather name="user" size={18} color={color} />
            }
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeRotas} />
        <Tab.Screen name="Curso" component={CursoRotas} />
        <Tab.Screen name="Perfil" component={PerfilRotas} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}