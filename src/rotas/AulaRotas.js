import { createStackNavigator } from '@react-navigation/stack';
import Aula from '../telas/Aula';
import { Fragment } from 'react';

const Stack = createStackNavigator();

export default function AulaRotas() {
    return (
        <Stack.Navigator
            initialRouteName='Principal'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Principal"
                component={Aula}
            />
        </Stack.Navigator>
    );
}