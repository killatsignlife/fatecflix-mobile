import { StyleSheet, Text, View, Image, StatusBar, Alert, TouchableOpacity, FlatList} from 'react-native'
import React, { useContext } from 'react'
import { Feather } from 'react-native-vector-icons'
import { CursosContext } from "../../../context/Cursos";
import { useNavigation } from '@react-navigation/native'

const TelaCursosAndamento = () => {
  const { cursoMatriculados } = useContext(CursosContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={cursoMatriculados}
        renderItem={({item}) => <ListItem titulo={item.titulo} progresso={item.progresso} cursoId={item.cursoId}/>}
        keyExtractor={item => item.id}
        ListHeaderComponent={Topo}
    />
    </View>
  )
}


const Topo = () => {
  return(
  <View style={styles.containerTopo}>
    <Image style={styles.imagem} source={require('../../../../assets/imagens/vendramel.png')} />
    <View style={styles.containerLinks}>
          <Feather name="play" size={52} color="white" />
          <Text style={styles.textoLink}>Cursos em andamento</Text>
  </View>
</View>
  )
}

const ListItem = ({ titulo, progresso, cursoId}) => {
  const navigation = useNavigation()

  return(
    <TouchableOpacity style={styles.containerItem} onPress={() => navigation.navigate({ name: "Aulas", params: { cursoId }} )}>
        <View style={styles.containerTitulo}>
          <Text style={styles.textoTitulo}>{ titulo }</Text>
        </View>
        <View style={styles.containerProgresso}>
          <Feather name="pie-chart" size={32} color="black" />
          <Text style={styles.textoItem}>{progresso}% concluído</Text>
        </View>
    </TouchableOpacity>
  )
}



export default TelaCursosAndamento

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: StatusBar.currentHeight + 80,
  },
  containerTopo: {
    backgroundColor: "black",
    minHeight: 210
  },
  containerLinks: {
    height: 80,
    width: "88%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 12,
  },
  textoLink:{
    fontSize: 22,
    marginLeft: 18,
    color: "white"
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
    flexDirection: "row",
    padding: 8,
    justifyContent: "center",
    height: 100,
    borderWidth: 1,
    borderBlockColor: "grey"
  },
  containerProgresso: {
    justifyContent: "center",
    alignItems: "center"
  },
  containerTitulo:{
    width:"60%",
    justifyContent: "center",
  },
  textoTitulo:{
    fontSize: 18,
    fontWeight: "bold"
  },
  textoItem: {
    fontSize: 16,
    color: 'black',
  }
})