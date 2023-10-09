import {createStackNavigator} from '@react-navigation/stack';
import Home from '../telas/Home';

const Stack = createStackNavigator();

export default function HomeRotas(){
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
          <Stack.Screen name="Principal" component={Home} />
        </Stack.Navigator>
      );
}