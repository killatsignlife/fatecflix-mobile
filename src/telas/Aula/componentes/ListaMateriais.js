import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { listaCursos } from '../../../mocks/cursos'
import { Feather } from 'react-native-vector-icons'

const ListaMateriais = ({ materiais }) => {

  function obterLista() {
    return materiais?.map((material) => {
      return (
        <TouchableOpacity
          key={material.id}
          style={styles.containerMaterial}
          onPress={() => Linking.openURL(material.link)}
        >
          <Text style={styles.textoTitulo}>{material.titulo}</Text>
          <View tyle={styles.containerTipo}>
            <Text style={styles.textoTipo}>{material.tipo}</Text>
          </View>
          <Feather name="external-link" size={22} color="blue" />
        </TouchableOpacity>
      )
    })
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.textoTituloTab}>Materiais do curso</Text>
        {obterLista()}
      </ScrollView>
    </View>
  )
}

export default ListaMateriais

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 200,
    paddingHorizontal: 8,
  },
  textoTituloTab: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8
  },
  containerMaterial: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    marginVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
  },
  textoTitulo: {
    fontSize: 13,
    color: "black",
    width: "60%"
  },
  containerTipo: {
    width: "20%"
  },
  textoTipo: {
    fontSize: 14,
    color: "black",
  }

})