import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { listaCursos } from '../../../mocks/cursos'
import CursoCard from './CursoCard'
import logoTipo from '../../../../assets/imagens/fatecflix.png'

const categoriasCursos = ["Desenvolvimento de Software", "Matemática", "Negócios", "Química"]

const Topo = () => {
  return (
    <View style={styles.containerTopo}>
      <Image source={logoTipo} style={styles.logoImagem} />
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
                        <CursoCard key={curso.cursoId} titulo={curso.titulo} descricao={curso.descricao} imagem={curso.imagem}/>
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
  containerTopo:{
    width: '100%',
    backgroundColor: "#000",
    paddingVertical: 12
  },
  logoImagem: {
    width: 210,
    height: 48,
    resizeMode: 'stretch',
    borderRadius: 12,
  }
})

