import { StyleSheet, View, Image, Text, StatusBar } from 'react-native'
import React from 'react'
import Secao from './componentes/Secao';
import Lista from './componentes/Lista';
import { useContext } from 'react';
import { PerfilContext } from '../../context/Perfil'

const Topo = () => {


  const { dadosPessoais, dadosAcademicos } = useContext(PerfilContext)

  return (
    <View style={styles.container}>
      <View style={styles.containerFoto}>
        <Image style={styles.imagem} source={require('../../../assets/imagens/vendramel.png')} />
        <Text style={styles.nome}>{dadosPessoais.nome}</Text>
        <Text style={styles.nomeUsuario}>{dadosPessoais.username} </Text>
      </View>
      <Secao />
      <View style={styles.containerEditar}>
        <Text style={styles.textoEditar}>Editar Informações</Text>
      </View>
    </View>
  )
}


const Perfil = () => {

  return (
    <Lista topo={<Topo />} />
  )
}

export default Perfil;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: StatusBar.currentHeight + 80,
  },
  containerFoto: {
    backgroundColor: "#FAF7F5",
    padding: 8,
    alignItems: 'center',
    justifyContent: "center",
    height: 320,
  },
  imagem: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2
  },
  nome: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 24,
    color: "#231d19",
    marginTop: 12,
  },
  nomeUsuario: {
    fontSize: 17,
    textAlign: "center",
    color: "rgb(86,80,76)"
  },
  textoEditar: {
    padding: 12,
    fontSize: 17,
    fontWeight: "bold",
    color: "#231d19",
  },
  containerEditar: {
    backgroundColor: "rgb(214,208,204)",
  }
})

