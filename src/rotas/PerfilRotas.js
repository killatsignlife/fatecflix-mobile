import {createStackNavigator} from '@react-navigation/stack';
import Perfil from '../telas/Perfil';
import EditarDadosPessoais from '../telas/Perfil/telasEdicao/EditarDadosPessoais';
import EditarDadosAcademicos from '../telas/Perfil/telasEdicao/EditarDadosAcademicos';
import EditarSeguranca from '../telas/Perfil/telasEdicao/EditarSeguranca';
import InformarProblema from '../telas/Perfil/telasEdicao/InformarProblema';

const Stack = createStackNavigator();

export default function PerfilRotas(){
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
          <Stack.Screen name="Principal" component={Perfil} />
          <Stack.Screen name="Editar dados pessoais" component={EditarDadosPessoais} />
          <Stack.Screen name="Editar dados academicos" component={EditarDadosAcademicos} />
          <Stack.Screen name="Editar seguranca" component={EditarSeguranca} />
          <Stack.Screen name="Informar problema" component={InformarProblema} />
        </Stack.Navigator>
      );
}