import { StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const CursoCard = (
  { cursoId,
    titulo, 
    size, 
    descricao , 
    imagem, 
    cargaHoraria, 
    dataAtualizacao, 
    mediaAvaliacao,
    aulas  
  }) => {  

  const navigation = useNavigation()

  let width = 120
  let height = 150
  if(size == "grande") { width = 140; height = 180}

    return (
      <TouchableOpacity 
        style={[styles.cardContainer, { width: width, height: height }]}
        onPress={() => navigation.navigate("ExibeCurso", 
        { cursoId, imagem, titulo, descricao, cargaHoraria, dataAtualizacao, mediaAvaliacao, aulas })}
      >
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

