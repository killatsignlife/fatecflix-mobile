import { StyleSheet, Text, View, Image, StatusBar, Alert, TouchableOpacity, FlatList} from 'react-native'
import React from 'react'
import { Feather } from 'react-native-vector-icons'
import { cursoConquistas } from '../../../mocks/cursos'
import { ScrollView } from 'react-native-gesture-handler'

const TelaConquistas = () => {
  return (
    <View style={styles.container}>
      <Topo />
      <ScrollView style={styles.wrapperConquistas}>
      <View style={styles.containerConquistas}>
        {
          cursoConquistas.map((item) => {
            return(
              <ListItem  
                key={item.id} 
                sigla={item.sigla}
                titulo={item.titulo}
                data={item.data_finalizacao}                
              />
            )
          })
        }
      </View>
      </ScrollView>
    </View>
  )
}

const Topo = () => {
  return(
  <View style={styles.containerTopo}>
    <Image style={styles.imagem} source={require('../../../../assets/imagens/vendramel.png')} />
    <View style={styles.containerLinks}>
          <Feather name="award" size={52} color="red" />
          <Text style={styles.textoLink}>Conquistas</Text>
  </View>
</View>
  )
}

const ListItem = ({ sigla, titulo, data}) => {
  return(
    <TouchableOpacity style={styles.containerItem} onPress={() => Alert.alert("Não implementado")}>
          <Text style={styles.textoSigla}>{ sigla }</Text>
          <Text style={styles.textoTitulo}>{ titulo }</Text>
          <Text style={styles.textoData}>{ data }</Text>
    </TouchableOpacity>
  )
}



export default TelaConquistas

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: StatusBar.currentHeight + 80,
  },
  containerTopo: {
    backgroundColor: "black",
    minHeight: 250
  },
  containerLinks: {
    height: 120,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  textoLink:{
    fontSize: 22,
    marginLeft: 18,
    color: "red"
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 200 / 2,
    alignSelf: "flex-end",
    margin: 12
  },
  containerItem: {
    backgroundColor: "white",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    borderRadius: 8,
    borderWidth: 1,
    margin: 8,
    width: 120,
    height: 120,
    marginHorizontal: 20
  },
  textoSigla:{
    fontSize: 32,
    fontWeight: "bold"
  },
  textoTitulo:{
    fontSize: 14,
  },
  textoData:{
    fontSize: 12,
  },
  containerConquistas: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 12
    
  },
  wrapperConquistas: {
    backgroundColor: "white",
    flexGrow: 1,
  }
 
})