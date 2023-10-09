import {createStackNavigator} from '@react-navigation/stack';
import Curso from '../telas/Curso';

const Stack = createStackNavigator();

export default function CursoRotas(){
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
          <Stack.Screen name="Principal" component={Curso} />
        </Stack.Navigator>
      );
}