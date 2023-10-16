import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import SvgUri from 'react-native-svg-uri'
import imagem from '../../../assets/imagens/menu.svg'

const Topo = () => {
    return(
        <View>
             <SvgUri source={imagem} width={240} height={240} />
        </View>
    )
}

const MenuCursos = () => {
  return (
    <View>
        <Topo />
      <Text>MenuCursos</Text>
    </View>
  )
}

export default MenuCursos

const styles = StyleSheet.create({
    imagem: {
        width: 200,
        height: 200,
        borderRadius: 200 / 2
      },
})