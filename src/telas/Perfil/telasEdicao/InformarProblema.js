import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import estilo from '../../../global/estilo'

const InformarProblema = () => {

  const [problema, setProblema] = useState('')


  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Informar problema</Text>
      <View style={styles.containerForm}>

      <View style={styles.containerCampo}>
        <Text style={estilo.subtitulo}>Descreva o problema:</Text>
        <TextInput
                      style={styles.entrada}
                      value={problema}
                      onChangeText={setProblema}
                      multiline
                      numberOfLines={8}
                  />
      </View>

      <TouchableOpacity 
                    style={styles.botao}
                    onPress={()=>{Alert.alert("Não implementado")}}>
                    <Text style={styles.textoBotao}>
                        Enviar
                    </Text>
      </TouchableOpacity>

      </View>
      
    </View>
  )
}

export default InformarProblema;

const styles = StyleSheet.create({
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