import { StyleSheet, Text, View, StatusBar, Alert } from 'react-native'

import React, { useState, useCallback, useRef } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import TabViewAulaContent from './componentes/TabViewAulaContent'

const Aula = () => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  
  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={250}
        width={"100%"}
        play={playing}
        videoId={"e41QFmkqaEY"}
        //onChangeState={onStateChange}
      />
      <View style={styles.containerTitulo}>
          <Text style={styles.textoTitulo}>Aula 01 - Introdução</Text>
      </View>
      <TabViewAulaContent />
    </View>
  )
}

export default Aula

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight + 32,
  },
  containerTitulo:{
    justifyContent: 'center', 
    alignItems: 'center',
  },
  textoTitulo: {
    fontSize: 26,
  }
})



// https://lonelycpp.github.io/react-native-youtube-iframe/