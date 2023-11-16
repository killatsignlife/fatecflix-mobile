import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, StatusBar } from 'react-native'
import React, { useState } from 'react'
import estilo from '../../../global/estilo'

const EditarDadosAcademicos = () => {

  const [curso, setCurso] = useState('Engenharia de Software');
  const [periodo, setPeriodo] = useState('Manhã');
  const [ingresso, setIngresso] = useState('2021');
  const [ra, setRa] = useState('100100200');


  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Editar Dados Academicos</Text>
      <View style={styles.containerForm}>

      <View style={styles.containerCampo}>
        <Text style={estilo.subtitulo}>Curso:</Text>
        <TextInput
                      style={styles.entrada}
                      value={curso}
                      onChangeText={setCurso}
                  />
      </View>

      <View style={styles.containerCampo}>
        <Text style={estilo.subtitulo}>Período:</Text>
        <TextInput
                      style={styles.entrada}
                      value={periodo}
                      onChangeText={setPeriodo}
                  />
      </View>

      <View style={styles.containerCampo}>
        <Text style={estilo.subtitulo}>Ingresso:</Text>
        <TextInput
                      style={styles.entrada}
                      value={ingresso}
                      onChangeText={setIngresso}
                  />
      </View>

      <View style={styles.containerCampo}>
        <Text style={estilo.subtitulo}>RA:</Text>
        <TextInput
                      style={styles.entrada}
                      value={ra}
                      onChangeText={setRa}
                  />
      </View>

      <TouchableOpacity 
                    style={styles.botao}
                    onPress={()=>{Alert.alert("Não implementado")}}>
                    <Text style={styles.textoBotao}>
                        Salvar
                    </Text>
      </TouchableOpacity>

      </View>
      
    </View>
  )
}

export default EditarDadosAcademicos;

const styles = StyleSheet.create({
  container:{
    paddingTop: StatusBar.currentHeight + 240,
  },
  containerForm:{
    backgroundColor: '#fff',
    padding: 12,
    justifyContent: 'center',	
    borderRadius: 8,
    marginTop: 10,
  },
  containerCampo:{
    marginVertical: 6,
    borderRadius: 8,
   },

  entrada: {
    borderWidth: 2,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 17,
    borderRadius: 8,
    height: 44,
    width: '96%',
    marginTop: 4
},
botao: {
  backgroundColor: '#000',
  marginTop: 20,
  padding: 10,
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
  borderRadius: 8,
  width: '100%',
},
textoBotao: {
  fontWeight: 'bold',
  fontSize: 16,
  color: '#fff',
},
})