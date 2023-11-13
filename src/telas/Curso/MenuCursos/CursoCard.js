import { StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

const CursoCard = ({ titulo, descricao , imagem}) => {
    return (
      <TouchableOpacity style={styles.cardContainer} >
        <ImageBackground source={imagem} resizeMode="stretch" style={styles.backgroundImage}>
        <Text style={styles.textoCard}>{titulo}</Text>
        </ImageBackground>
      </TouchableOpacity>
    )
  }


export default CursoCard

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    height: 150,
    width: 120,
    margin: 6,
    borderRadius: 4,
  },
  textoCard: {
    fontSize: 13,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 2,
    textAlign: "center",
    height: 40
  },
  backgroundImage: {
    flex: 1,
    borderRadius: 4
  }
})

