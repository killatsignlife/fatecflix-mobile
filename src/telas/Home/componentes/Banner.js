import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Banner = ({ imageSrc, title }) => {
  return (
    <>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.container}>
      <Image style={{ width: 325, height: 300, borderRadius: 8, marginLeft: -10}} source={imageSrc} />
    </View>
    </>
  )
}

export default Banner

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        backgroundColor: "lightcoral",
        alignSelf: "center",
        width: 340,
        height: 290,
        marginLeft: 16,
        borderRadius: 8,
        paddingTop: 8
    },
    title: {
      fontSize: 28,
      color: 'white',
      fontWeight: 'bold',
      marginTop: 40,
      textAlign: "center"
    }
})