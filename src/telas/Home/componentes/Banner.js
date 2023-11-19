import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Banner = ({ imageSrc, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image style={{ width: 325, height: 300 }} source={imageSrc} />
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({
    container:{
        marginTop: 40,
        backgroundColor: "lightcoral",
        alignSelf: "center",
        width: "90%",
        height: 300,
        marginVertical: 16,
    },
    title: {
      fontSize: 32,
      color: 'white',
      fontWeight: 'bold'
    }
})