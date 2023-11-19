import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Image } from 'react-native'
import React from 'react'
import { comentarios } from '../../../mocks/comentarios'
import { Feather } from 'react-native-vector-icons'
import noPhoto from '../../../../assets/imagens/noPhoto.jpg'

const ExibeComentarios = () => {
  function obterComentarios() {
    return comentarios.map((comentario) => {
      return (
        <TouchableOpacity
          key={comentario.id}
          onPress={() => Alert.alert(`Usuario: ${comentario.name}  comentou: comentario.comment`)}
        >
          <View style={styles.comentario}>
            <View style={styles.containerComentario}>
              <Image src={comentario.avatar} defaultSource={noPhoto} style={styles.avatar}/>
              <Text style={styles.textoItemTitulo}>{comentario.name}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.contentText}>{comentario.comment}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )
    })
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.textoTitulo}>Comentários</Text>
        {obterComentarios()}
      </ScrollView>
    </View>
  )
}

export default ExibeComentarios

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 200,
    paddingHorizontal: 8,
  },
  textoTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8
  },
  avatar: {
    width: 40,
    height: 40,
    borderWidth: 10,
  },
  comentario: {
    flex: 1,
    flexDirection: "column",
    margin: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
  },
  content: {
    margin: 8,
  },
  contentText: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'gray'
  },
  containerComentario: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    marginVertical: 4,
  },
  textoItemTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});