import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Imagem from '../../../assets/imagens/menu.svg'
import { listaCursos } from '../../mocks/cursos'
import { lista } from '../../mocks/perfil'
//<Imagem width={220} height={220} />

const categoriasCursos = ["Desenvolvimento de Software", "Matemática", "Negócios", "Química"]

const Topo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.imagem}>Logo</Text>
    </View>
  )
}

const Categoria = () => {
  return (
    <>
      {
        categoriasCursos.map((item) => {
          return (
            <View style={styles.categoriaContainer} key={item.id}>
              <Text>{item}</Text>
              <ScrollView horizontal={true}>
                {
                  listaCursos.map((curso) => {
                    if (curso.categoria == item) {
                      return (
                        <CursoCard titulo={curso.titulo} descricao={curso.descricao} />
                      )
                    }
                  })
                }
              </ScrollView>
            </View>
          )
        })
      }

    </>
  )
}

const CursoCard = ({ titulo, descricao }) => {
  return (
    <TouchableOpacity style={styles.cardContainer} >
      <Text>{titulo}</Text>
      {/* <Text>{descricao}</Text> */}
    </TouchableOpacity>
  )
}

const MenuCursos = () => {
  return (
    <ScrollView>
      <Topo />
      <Categoria categoria />
    </ScrollView>
  )
}

export default MenuCursos

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  imagem: {
    width: 200,
    height: 200,
    backgroundColor: "grey"
  },
  categoriaContainer: {
    backgroundColor: "#fefee9",
    height: 200,
  },
  cardContainer: {
    backgroundColor: "grey",
    height: 160,
    width: 150,
    margin: 8,
    padding: 4,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

