import { StyleSheet, Text, View, Image, StatusBar, Alert, TouchableOpacity, FlatList} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Feather } from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native'
import { CursosContext } from "../../../context/Cursos";
import { listaCursos } from '../../../mocks/cursos';


const TelaFavoritos = () => {

  const { favoritos } = useContext(CursosContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={favoritos}
        renderItem={({item}) => 
          <ListItem  
            titulo={item?.titulo} 
            modulos={item?.modulos} 
            aulas={item?.aulas}
            exercicios={item?.exercicios}
            cursoId={item?.cursoId}
          />}
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
          <Feather name="star" size={52} color="red" />
          <Text style={styles.textoLink}>Favoritos</Text>
  </View>
</View>
  )
}

const ListItem = ({ cursoId, aulas, modulos, titulo, exercicios }) => {
  const navigation = useNavigation()
  const [cursos, setCursos ] = useState(listaCursos)
  const [curso, setCurso ] = useState()
  const getCursoById = () => {
    cursos.forEach(c => {
      if (c.cursoId === cursoId) {
        setCurso(c)
      }
    })
  }

  useEffect(() => {
    getCursoById() 
  })

  return(
    <TouchableOpacity style={styles.containerItem} onPress={() => navigation.navigate({ 
      name: "ExibeCurso",
      params: { 
        curso: curso.cursoId, 
        imagem: curso.imagem, 
        titulo: curso.titulo, 
        descricao: curso.descricao, 
        cargaHoraria: curso.cargaHoraria, 
        dataAtualizacao: curso.dataAtualizacao, 
        mediaAvaliacao: curso.mediaAvaliacao, 
        aulas: curso.aulas
      }})}>
        <View style={styles.containerTitulo}>
          <Text style={styles.textoTitulo}>{ titulo }</Text>
        </View>
        <View style={styles.containerResumo}>
          <Text style={styles.textoItem}>{modulos} módulos</Text>
          <Text style={styles.textoItem}>{aulas} aulas</Text>
          <Text style={styles.textoItem}>{exercicios} exercícios</Text>
        </View>
    </TouchableOpacity>
  )
}



export default TelaFavoritos

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
    flexDirection: "row",
    padding: 8,
    justifyContent: "center",
    height: 100,
    borderWidth: 1,
  },
  containerResumo: {
    justifyContent: "center",
    alignItems: "flex-start"
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
    fontSize: 14,
  }
})