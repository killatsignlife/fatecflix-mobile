import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { Feather } from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native'


const ListaAulas = ({ aulas, id }) => {
  const navigation = useNavigation()

  function obterLista() {
    return aulas?.map((aula) => {
      return (
        <TouchableOpacity
          key={aula.aula_id}
          style={styles.containerAula}
          onPress={() => navigation.navigate({ name: "Aulas", params: { cursoId: id, aulaId: aula.aula_id }})}
        >
          <Text style={styles.textoAulaTitulo}>{aula.titulo ? aula.titulo : 'Video desconhecido'}</Text>
          <Feather name="circle" size={22} color="black" />
        </TouchableOpacity>
      )
    })
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.textoTitulo}>Aulas do curso</Text>
        {aulas ? obterLista() : []}
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