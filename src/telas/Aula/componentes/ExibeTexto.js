import { StyleSheet, Text, ScrollView, View } from 'react-native'
import React from 'react'

const ExibeTexto = ({ texto,titulo }) => {
  return (
    <View style={styles.container}>
    <ScrollView> 
      <Text style={styles.titulo}>{titulo ? titulo : 'Aula Introdutoria'}</Text>
      <Text style={styles.texto}>
        {texto ? texto : 'Texto introdutorio'}
      </Text>
    </ScrollView>
    </View>
  )
}

export default ExibeTexto

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  texto: {
    fontSize: 16,
    textAlign: 'justify',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
  }
})