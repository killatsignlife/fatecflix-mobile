import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Banner = () => {
  return (
    <View style={styles.container}>
      <Text>Banner</Text>
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({
    container:{
        backgroundColor: "darkseagreen",
        alignSelf: "center",
        width: "90%",
        height: 300,
        marginVertical: 16,
    }
})