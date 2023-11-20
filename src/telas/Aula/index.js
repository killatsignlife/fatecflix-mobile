import { StyleSheet, Text, View, StatusBar, Alert } from 'react-native'

import React, { useState, useCallback, useRef, useEffect } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import TabViewAulaContent from './componentes/TabViewAulaContent'
import { listaCursos } from '../../mocks/cursos';

const Aula = ({ route }) => {
  const [playing, setPlaying] = useState(false);
  const [cursos, setCursos] = useState(listaCursos)
  const [curso, setCurso] = useState()

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  function findById() {
    cursos.forEach(c => {
      if (c.cursoId === route.params?.cursoId) {
        setCurso(c)
      }
    })
  }

  function findAulaUrl(id){
    if(id === null) {
      const aula = curso.aulas[0]?.video.replace('https://www.youtube.com/watch?v=', '')
      return aula
    } else {
      
    }

    const aulaEncontrada = curso.find(curso => curso.aulaId == id)
    return aulaEncontrada?.video.replace('https://www.youtube.com/watch?v=', '')
  }
  
  useEffect(() => {
    findById()
  })
  return (
    <>
      {curso ? 
      <View style={styles.container}>
        <YoutubePlayer
          height={250}
          width={"100%"}
          play={playing}
          videoId={curso.aulas[0]?.video.replace('https://www.youtube.com/watch?v=', '')}
          //onChangeState={onStateChange}
        />
        <View style={styles.containerTitulo}>
          <Text style={styles.textoTitulo}>{curso.aulas[0]?.titulo}</Text>
        </View>
        <TabViewAulaContent 
          cursoId={curso?.cursoId} 
          titulo={curso?.titulo} 
          textos={curso?.descricao} 
          aulas={curso?.aulas} 
          exercicios={curso?.exercicios} 
          materiais={curso?.materiais} 
        />
        </View> :<View style={styles.container}>
          <Text style={styles.textoTitulo}>Primeiro, se matricule em um curso</Text>
          </View>
    
    }
    </>
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