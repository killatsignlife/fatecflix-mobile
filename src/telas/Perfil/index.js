import { StyleSheet, View, Image } from 'react-native'
import React from 'react'

const Perfil = () => {

  return (
    <View style={styles.container}>
      <View style={styles.containerFoto}>
        <Image style={styles.imagem} source={ require('../../../assets/imagens/vendramel.png') }/>
      </View>
    </View>
  )
}

export default Perfil;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(242, 107, 107, 0.21)"
  },
  containerFoto: {
    margin: 8,
    alignItems: 'center',
    justifyContent: "center",
    height: 240,
  },
  imagem:{
    width: 200,
    height: 200,
    borderRadius: 200/2
  }
})