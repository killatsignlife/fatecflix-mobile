import { StyleSheet, Text, View, StatusBar, Alert, TouchableOpacity } from 'react-native'

import React, { useState, useCallback, useRef, useEffect } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import TabViewAulaContent from './componentes/TabViewAulaContent'
import { listaCursos } from '../../mocks/cursos';
import { useNavigation } from '@react-navigation/native';

const Aula = ({ route }) => {
  const [playing, setPlaying] = useState(false);
  const [cursos, setCursos] = useState(listaCursos)
  const [curso, setCurso] = useState()
  const navigation = useNavigation()

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
        </View> : <View style={styles.containerSemCurso}>
          <Text style={styles.textoTituloSemCurso}>Matricule-se matricule em um de nossos cursos</Text>
          <TouchableOpacity style={styles.botaoCursos} onPress={()=> navigation.navigate("Curso")}>
            <Text style={styles.textoBotaoCurso}> Ir para cursos</Text>
          </TouchableOpacity>
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
  containerSemCurso: {
    flex: 1,
    paddingTop: StatusBar.currentHeight + 32,
    backgroundColor: "black",
    padding: 12,
    justifyContent: "center"
  },
  containerTitulo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoTitulo: {
    fontSize: 26,
  },
  textoTituloSemCurso:{
    fontSize: 26,
    color: "white" 
  },
  textoBotaoCurso: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  botaoCursos: {
    marginTop: 20,
    backgroundColor: "#ff0539",
    width: 200,
    height: 46,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  }
})



// https://lonelycpp.github.io/react-native-youtube-iframe/