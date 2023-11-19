import { StyleSheet, Text, ScrollView, View } from 'react-native'
import React from 'react'

const ExibeTexto = () => {
  return (
    <View style={styles.container}>
    <ScrollView> 
      <Text style={styles.titulo}>Lorem ipsum dolor sit amet</Text>
      <Text style={styles.texto}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Sed urna erat, gravida vel volutpat ac, vehicula nec erat. 
      Nunc venenatis sit amet sem ac maximus. Morbi aliquet dolor elit, 
      et vehicula elit sodales id. Vestibulum eu ligula efficitur, 
      congue leo nec, placerat enim. Maecenas vitae risus sit amet nisl 
      rhoncus iaculis at sed ligula. Nunc lacinia nulla ut justo consequat, 
      a interdum dui sodales. Nulla quis porttitor magna, vel molestie risus. 
      Nunc pretium a odio ut posuere. Vestibulum sed quam massa. Sed eget elit 
      sed eros sagittis condimentum. Sed dapibus, metus sit amet efficitur placerat, 
      orci libero ultrices metus, quis ullamcorper dolor erat eget magna. Nullam semper 
      est quis elementum iaculis. Praesent rhoncus, mauris nec ultrices sagittis, 
      lorem tellus lobortis leo, a interdum mauris sem at mi. Duis at magna at ante ultricies 
      posuere a non urna. Nunc varius elit vitae purus vestibulum tincidunt. Nulla dui odio, 
      euismod placerat pellentesque at, molestie in nisl. Donec quam lacus, mollis et placerat 
      nec, accumsan a diam. Donec a tincidunt nibh, vitae elementum nulla. Vivamus cursus iaculis
       lacus, ac mollis sapien tempus ac. Quisque ultricies maximus magna, vitae commodo massa viverra id. 
      </Text>
      <Text style={styles.texto}>Lorem ipsum dolor sit amet</Text>
      <Text style={styles.texto}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Sed urna erat, gravida vel volutpat ac, vehicula nec erat. 
      Nunc venenatis sit amet sem ac maximus. Morbi aliquet dolor elit, 
      et vehicula elit sodales id. Vestibulum eu ligula efficitur, 
      congue leo nec, placerat enim. Maecenas vitae risus sit amet nisl 
      rhoncus iaculis at sed ligula. Nunc lacinia nulla ut justo consequat, 
      a interdum dui sodales. Nulla quis porttitor magna, vel molestie risus. 
      Nunc pretium a odio ut posuere. Vestibulum sed quam massa. Sed eget elit 
      sed eros sagittis condimentum. Sed dapibus, metus sit amet efficitur placerat, 
      orci libero ultrices metus, quis ullamcorper dolor erat eget magna. Nullam semper 
      est quis elementum iaculis. Praesent rhoncus, mauris nec ultrices sagittis, 
      lorem tellus lobortis leo, a interdum mauris sem at mi. Duis at magna at ante ultricies 
      posuere a non urna. Nunc varius elit vitae purus vestibulum tincidunt. Nulla dui odio, 
      euismod placerat pellentesque at, molestie in nisl. Donec quam lacus, mollis et placerat 
      nec, accumsan a diam. Donec a tincidunt nibh, vitae elementum nulla. Vivamus cursus iaculis
       lacus, ac mollis sapien tempus ac. Quisque ultricies maximus magna, vitae commodo massa viverra id. 
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