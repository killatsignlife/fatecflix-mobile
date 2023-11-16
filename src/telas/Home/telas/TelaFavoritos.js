import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'

const TelaFavoritos = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>TelaFavoritos</Text>
    </View>
  )
}

export default TelaFavoritos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: StatusBar.currentHeight + 80,
  },
  texto: {
    fontSize: 24,
    color: "white",
  }
})