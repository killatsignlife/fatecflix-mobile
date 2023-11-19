import { StyleSheet, ScrollView, View, StatusBar } from 'react-native'
import React from 'react'
import Header from './componentes/Header'
import Banner from './componentes/Banner'

import csharp from '../../../assets/imagens/csharp.jpeg'
import java from '../../../assets/imagens/java.png'
import javascript from '../../../assets/imagens/javascript.png'
import python from '../../../assets/imagens/python.jpg'


const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.containerBanners}>
        <Banner imageSrc={java} title='Faça java'/>
        <Banner imageSrc={javascript} title="Javascript emergente"/>
        <Banner imageSrc={csharp} title="Musica com C#"/>
        <Banner imageSrc={python} title="A querida cobra Píton" />
      </View>
    </ScrollView>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: StatusBar.currentHeight + 80,
  },
  texto: {
    fontSize: 32,
    color: "white",
    marginLeft: 16,
  },
  containerBanners:{
    paddingBottom: 120
  }
})