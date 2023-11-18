import { StyleSheet, Text, View, StatusBar, Button, Alert } from 'react-native'
import ExibeComentarios from './componentes/ExibeComentarios'
import ExibeTexto from './componentes/ExibeTexto'
import ListaAulas from './componentes/ListaAulas'
import ListaExercicios from './componentes/ListaExercicios'
import ListaMateriais from './componentes/ListaMateriais'

import React, { useState, useCallback, useRef } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import { ButtonGroup } from '@rneui/themed';
import TabViewAulaContent from './componentes/TabViewAulaContent'





const Aula = () => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  
  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={250}
        width={"100%"}
        play={playing}
        videoId={"e41QFmkqaEY"}
        onChangeState={onStateChange}
      />
      <View style={{ 
        marginBottom: 10,
        justifyContent: 'center', 
        alignItems: 'center'}}
      >
          <Text style={{
            fontSize: 26,
          }}>Aula 01 - Introdução</Text>
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
  }
})



// https://lonelycpp.github.io/react-native-youtube-iframe/