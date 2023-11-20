
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { listaCursos } from '../../../mocks/cursos'
import { Feather } from 'react-native-vector-icons'



const ListaExercicios = ({ exercicios }) => {

  function obterLista() {
    return exercicios?.map((exercicio) => {
      return (
        <TouchableOpacity
          key={exercicio.id}
          style={styles.containerExercicio}
          onPress={() => Alert.alert("clicou no exercício")}
        >
          <Text style={styles.textoItemTitulo}>{exercicio.titulo}</Text>
          <Feather name="circle" size={22} color="black" />
          {/* <Feather name="check-circle" size={22} color="green" /> */}
        </TouchableOpacity>
      )
    })
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.textoTitulo}>Exercícios do curso</Text>
        {obterLista()}
      </ScrollView>
    </View>
  )
}

export default ListaExercicios

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
  containerExercicio: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    marginVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
  },
  textoItemTitulo: {
    fontSize: 16,
    color: "black",
  }

})