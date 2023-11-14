import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ListaAulas = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.textoTitulo}>Lista de Aulas</Text>
        <Text style={styles.texto}>Lista</Text>
    </View>
  )
}

export default ListaAulas

const styles = StyleSheet.create({
    container:{
        backgroundColor: "purple",
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