import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { listaCursos } from '../../../mocks/cursos'
import { Feather } from 'react-native-vector-icons'

const aulas = listaCursos[0].aulas

const ListaAulas = () => {

  function obterLista() {
    return aulas.map((aula) => {
      return (
        <TouchableOpacity
          key={aula.aula_id}
          style={styles.containerAula}
          onPress={() => Alert.alert("clicou na aula")}
        >
          <Text style={styles.textoAulaTitulo}>{aula.titulo}</Text>
          <Feather name="circle" size={22} color="black" />
          {/* <Feather name="check-circle" size={22} color="green" /> */}
        </TouchableOpacity>
      )
    })
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.textoTitulo}>Aulas do curso</Text>
        {obterLista()}
      </ScrollView>
    </View>
  )
}

export default ListaAulas

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
  containerAula: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    marginVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
  },
  textoAulaTitulo: {
    fontSize: 16,
    color: "black",
  }

})