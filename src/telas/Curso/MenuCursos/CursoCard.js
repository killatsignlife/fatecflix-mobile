import { StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'



const CursoCard = ({ titulo, descricao , imagem, size}) => {  

  let width = 120
  let height = 150
  if(size == "grande") { width = 140; height = 180}

    return (
      <TouchableOpacity style={[styles.cardContainer, { width: width, height: height }]}>
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

