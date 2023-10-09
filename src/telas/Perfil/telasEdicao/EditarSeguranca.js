import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import estilo from '../../../global/estilo'

const EditarSeguranca = () => {

  const [email, setEmail] = useState('vendramel@fatec.sp.gov.br');
  const [senha, setSenha] = useState('*********');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');


  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Segurança e Privacidade</Text>
      <View style={styles.containerForm}>

      <View style={styles.containerCampo}>
        <Text style={estilo.subtitulo}>Email:</Text>
        <TextInput
                      style={styles.entrada}
                      value={email}
                      onChangeText={setEmail}
                  />
      </View>

      <View style={styles.containerCampo}>
        <Text style={estilo.subtitulo}>Senha:</Text>
        <TextInput
                      style={styles.entrada}
                      value={senha}
                      onChangeText={setSenha}
                  />
      </View>

      <View style={styles.containerCampo}>
        <Text style={estilo.subtitulo}>Confirmação de senha:</Text>
        <TextInput
                      style={styles.entrada}
                      value={confirmacaoSenha}
                      onChangeText={setConfirmacaoSenha}
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

export default EditarSeguranca;

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