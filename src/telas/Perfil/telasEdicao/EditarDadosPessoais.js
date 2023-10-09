import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import estilo from '../../../global/estilo'

const EditarDadosPessoais = () => {

  const [nome, setNome] = useState('Wilson Vendramel');
  const [nascimento, setNascimento] = useState('01/01/2000');
  const [email, setEmail] = useState('vendramel@fatec.sp.gov.br');
  const [perfil, setPerfil] = useState('Aluno');


  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Editar Dados Pessoais</Text>
      <View style={styles.containerForm}>

      <View style={styles.containerCampo}>
        <Text style={estilo.subtitulo}>Nome</Text>
        <TextInput
                      style={styles.entrada}
                      value={nome}
                      onChangeText={setNome}
                  />
      </View>

      <View style={styles.containerCampo}>
        <Text style={estilo.subtitulo}>Data de Nascimento</Text>
        <TextInput
                      style={styles.entrada}
                      value={nascimento}
                      onChangeText={setNascimento}
                  />
      </View>

      <View style={styles.containerCampo}>
        <Text style={estilo.subtitulo}>e-mail</Text>
        <TextInput
                      style={styles.entrada}
                      value={email}
                      onChangeText={setEmail}
                  />
      </View>

      <View style={styles.containerCampo}>
        <Text style={estilo.subtitulo}>Perfil</Text>
        <TextInput
                      style={styles.entrada}
                      value={perfil}
                      onChangeText={setPerfil}
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

export default EditarDadosPessoais

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