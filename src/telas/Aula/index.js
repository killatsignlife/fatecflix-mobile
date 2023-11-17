import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExibeComentarios from './componentes/ExibeComentarios'
import ExibeTexto from './componentes/ExibeTexto'
import ListaAulas from './componentes/ListaAulas'
import ListaExercicios from './componentes/ListaExercicios'

const Aula = () => {
  return (
    <View>
      <Text>index</Text>
      <ExibeTexto />
      <ListaAulas />
      <ListaExercicios />
      <ListaMateriais />
      <ExibeComentarios />
    </View>
  )
}

export default Aula

const styles = StyleSheet.create({})