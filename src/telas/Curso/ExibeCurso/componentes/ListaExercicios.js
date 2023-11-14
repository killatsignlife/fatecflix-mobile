import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListaExercicios = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textoTitulo}>Lista de Exercicios</Text>
      <Text style={styles.texto}>Exercicios</Text>
    </View>
  )
}

export default ListaExercicios

const styles = StyleSheet.create({
    container:{
        backgroundColor: "green",
        height: 200,
        padding: 16
    },
    textoTitulo: {
      fontSize: 18,
      fontWeight: "bold"
    },
    texto: {
       paddingTop: 4, 
       fontSize: 14,
       textAlign: "justify"
    }
})