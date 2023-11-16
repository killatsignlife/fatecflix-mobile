import {createStackNavigator} from '@react-navigation/stack';
import Home from '../telas/Home';
import TelaFavoritos from '../telas/Home/telas/TelaFavoritos';
import TelaConquistas from '../telas/Home/telas/TelaConquistas';
import TelaCursosAndamento from '../telas/Home/telas/TelaCursosAndamento';

const Stack = createStackNavigator();

export default function HomeRotas(){
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
          <Stack.Screen name="Principal" component={Home} />
          <Stack.Screen name="CursosAndamento" component={TelaCursosAndamento} />
          <Stack.Screen name="Conquistas" component={TelaConquistas} />
          <Stack.Screen name="Favoritos" component={TelaFavoritos} />
        </Stack.Navigator>
      );
}