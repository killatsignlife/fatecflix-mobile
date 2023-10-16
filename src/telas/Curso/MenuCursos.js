import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Imagem  from '../../../assets/imagens/menu.svg'
//<Imagem width={220} height={220} />

const Topo = () => {
    return(
        <View style={styles.container}>
          <Text style={styles.imagem}>Logo</Text>
        </View>
    )
}

const Categoria = () => {
  return(
    <View style={styles.categoriaContainer}>
      <Text>Frontend</Text>
      <ScrollView horizontal={true}>
        <CursoCard />
        <CursoCard />
        <CursoCard />
        <CursoCard />
        <CursoCard />
      </ScrollView>
    </View>
  )
}

const CursoCard = () => {
  return(
  <TouchableOpacity style={styles.cardContainer} >
    <Text>Pare de chutar CSS</Text>
    <Text>Descrição do Curso</Text>
  </TouchableOpacity>
  )
}

const MenuCursos = () => {
  return (
    <View>
        <Topo />
        <Categoria />
    </View>
  )
}

export default MenuCursos

const styles = StyleSheet.create({
    container: {
      alignItems: 'center'
    },
    imagem: {
        width: 200,
        height: 200,
        backgroundColor: "grey"
    },
    categoriaContainer: {
      backgroundColor: "#fefee9",
      height: 200,
    },
    cardContainer: {
      backgroundColor: "grey",
      height: 160,
      width: 150,
      margin: 8,
      padding: 4,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center'
    }
})