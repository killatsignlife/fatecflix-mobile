import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import estilo from '../../../global/estilo'
import React, { useState, useContext } from 'react'
import { PerfilContext } from '../../../context/Perfil'
import { useNavigation } from '@react-navigation/native'

const EditarDadosPessoais = () => {
  const navigation = useNavigation()
  const {
    dadosPessoais,
    setDadosPessoais,
  } = useContext(PerfilContext)

  const [nome, setNome] = useState(dadosPessoais.nome);
  const [nascimento, setNascimento] = useState(dadosPessoais.nascimento);
  const [perfil, setPerfil] = useState(dadosPessoais.perfil);
  const [username, setUsername] = useState(dadosPessoais.username);
  const [email, setEmail] = useState(dadosPessoais.email);
  const [cpf, setCpf] = useState(dadosPessoais.cpf);

  function salvar() {
    const dadosPessoaisAlterados = {
      nome: nome,
      nascimento: nascimento,
      perfil: perfil,
      username: username,
      email: email,
      cpf: cpf,
    }
    setDadosPessoais(dadosPessoaisAlterados)
    Alert.alert('Dados Pessoais alterados com sucesso!')
    navigation.goBack();
  }


  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Editar Dados Pessoais</Text>
      <View style={styles.containerForm}>

        <View style={styles.containerCampo}>
          <Text style={estilo.subtitulo}>Nome:</Text>
          <TextInput
            style={styles.entrada}
            value={nome}
            onChangeText={setNome}
          />
        </View>

        <View style={styles.containerCampo}>
          <Text style={estilo.subtitulo}>Data de Nascimento:</Text>
          <TextInput
            style={styles.entrada}
            value={nascimento}
            onChangeText={setNascimento}
          />
        </View>

        <View style={styles.containerCampo}>
          <Text style={estilo.subtitulo}>Perfil:</Text>
          <TextInput
            style={styles.entrada}
            value={perfil}
            onChangeText={setPerfil}
          />
        </View>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => salvar()}>
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
  containerForm: {
    backgroundColor: '#fff',
    padding: 12,
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  containerCampo: {
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