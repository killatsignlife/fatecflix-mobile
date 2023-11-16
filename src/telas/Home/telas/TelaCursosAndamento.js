import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'

const TelaCursosAndamento = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela de cursos em andamento</Text>
    </View>
  )
}

export default TelaCursosAndamento

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