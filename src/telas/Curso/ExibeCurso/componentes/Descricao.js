import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Descricao = ({texto }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textoTitulo}>Descrição</Text>
      <Text style={styles.texto}>{texto}</Text>
    </View>
  )
}

export default Descricao

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        minHeightheight: 200,
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