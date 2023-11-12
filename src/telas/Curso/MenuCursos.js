import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import logo from '../../../assets/imagens/fatecflix_logo.png'
import { listaCursos } from '../../mocks/cursos'

const categoriasCursos = ["Desenvolvimento de Software", "Matemática", "Negócios", "Química"]

const Topo = () => {
  return (
    <View style={styles.containerTopo}>
      <Image source={logo} style={styles.logoImagem} />
    </View>
  )
}

const Categoria = () => {
  return (
    <View style={styles.containerCategorias}>
      {
        categoriasCursos.map((item, index) => {
          return (
            <View style={styles.categoriaContainer} key={index}>
              <Text style={styles.textoCategoria}>{item}</Text>
              <ScrollView horizontal={true}>
                {
                  listaCursos.map((curso) => {
                    if (curso.categoria == item) {
                      return (
                        <CursoCard key={curso.cursoId} titulo={curso.titulo} descricao={curso.descricao} />
                      )
                    }
                  })
                }
              </ScrollView>
            </View>
          )
        })
      }

    </View>
  )
}

const CursoCard = ({ titulo, descricao }) => {
  return (
    <TouchableOpacity style={styles.cardContainer} >
      <Text>{titulo}</Text>
    </TouchableOpacity>
  )
}

const MenuCursos = () => {
  return (
    <ScrollView style={styles.container}>
      <Topo />
      <Categoria categoria />
    </ScrollView>
  )
}

export default MenuCursos

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    paddingVertical: 4,
    
  },
  containerCategorias:{
    paddingBottom:22
  },
  categoriaContainer: {
    backgroundColor: "#000",
    height: 200,
  },
  textoCategoria:{
    color: "#FFF",
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8
  },
  cardContainer: {
    backgroundColor: "#FFF",
    height: 160,
    width: 150,
    margin: 8,
    padding: 4,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTopo:{
    width: '100%',
    alignItems: 'center',
    backgroundColor: "#000",
    paddingVertical: 12
    
  },
  logoImagem: {
    width: 220,
    height: 58,
    resizeMode: 'stretch',
    borderRadius: 12,
  }
})

