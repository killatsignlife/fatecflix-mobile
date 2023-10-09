import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { lista } from '../../../mocks/perfil';
import { Feather } from 'react-native-vector-icons'

import { useNavigation } from '@react-navigation/native';


const Lista = ({topo }) => {
  const navigation = useNavigation();

  function navegar(id){
    if (id == 1) {
        navigation.navigate('Editar dados pessoais');
    } else if (id == 2) {
        navigation.navigate('Editar dados academicos');
    } else if (id == 3) {
        navigation.navigate('Editar seguranca');
    } else if (id == 4) {
        navigation.navigate('Informar problema');
    }
  }

const ListItem = ({ title, id, icon }) => (
    <TouchableOpacity style={styles.containerItem} onPress={()=> navegar(id)}>
        <View style={styles.containerNome}>
          <Feather name={icon} size={22} color="black" />
          <Text style={styles.textoItem}>{title}</Text>
        </View>
        <Feather name="chevron-right" size={32} color="black" />
    </TouchableOpacity>
);

  return (
    <View style={styles.containerLista}>
    <FlatList
        data={lista}
        renderItem={({item}) => <ListItem title={item.title} id={item.id} icon={item.icon}/>}
        keyExtractor={item => item.id}
        ListHeaderComponent={topo}
    />
    </View>
  )
}

export default Lista

const styles = StyleSheet.create({
  containerLista: {
    backgroundColor: "white",
  },
  containerItem:{
    backgroundColor: "rgba(214,208,204, 0.3)", 
    height: 60,
    marginVertical: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    padding: 12
  },
  containerNome:{
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  textoItem: {
    fontSize: 14,
    marginLeft: 8,
  }

})