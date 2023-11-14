import {createStackNavigator} from '@react-navigation/stack';
import Curso from '../telas/Curso';
import TelaCurso from '../telas/Curso/ExibeCurso/TelaCurso';

const Stack = createStackNavigator();

export default function CursoRotas(){
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
          <Stack.Screen name="Principal" component={Curso} />
          <Stack.Screen name="ExibeCurso" component={TelaCurso} />
        </Stack.Navigator>
      );
}