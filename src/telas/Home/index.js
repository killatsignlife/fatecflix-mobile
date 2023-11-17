import { StyleSheet, ScrollView, View, StatusBar } from 'react-native'
import React from 'react'
import Header from './componentes/Header'
import Banner from './componentes/Banner'

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.containerBanners}>
        <Banner />
        <Banner />
        <Banner />
        <Banner />
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