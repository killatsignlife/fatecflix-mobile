import { createStackNavigator } from '@react-navigation/stack';
import Aula from '../telas/Aula';
import { Fragment } from 'react';

const Stack = createStackNavigator();

export default function AulaRotas() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Aula"
                component={Aula}
            />
        </Stack.Navigator>
    );
}