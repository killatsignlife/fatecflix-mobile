import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useContext } from 'react'
import { PerfilContext } from '../../../context/Perfil'
import estilo from '../../../global/estilo'
import { useNavigation } from '@react-navigation/native'

const EditarSeguranca = () => {

  const {
    dadosPessoais,
    setDadosPessoais,
    dadosSeguranca,
    setDadosSeguranca
  } = useContext(PerfilContext)
  const navigation = useNavigation()

  const [email, setEmail] = useState(dadosPessoais.email);
  const [senha, setSenha] = useState(dadosSeguranca.senha);
  const [confirmacaoSenha, setConfirmacaoSenha] = useState(dadosSeguranca.senha);

  function salvar() {
    if (senha != confirmacaoSenha) {
      Alert.alert('As senhas não conferem!')
      return
    }
    const dadosSegurancaAlterados = {
      senha: senha,
    }
    setDadosPessoais(dadosSegurancaAlterados)
    const dadosPessoaisAlterados = {
      nome: dadosPessoais.nome,
      username: dadosPessoais.username,
      cpf: dadosPessoais.cpf,
      nascimento: dadosPessoais.nascimento,
      email: email,
      perfil: dadosPessoais.perfil,
    }
    setDadosPessoais(dadosPessoaisAlterados)
    Alert.alert('Dados de Segurança alterados com sucesso!')
    navigation.goBack();
  }


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
            secureTextEntry={true}
          />
        </View>

        <View style={styles.containerCampo}>
          <Text style={estilo.subtitulo}>Confirmação de senha:</Text>
          <TextInput
            style={styles.entrada}
            value={confirmacaoSenha}
            onChangeText={setConfirmacaoSenha}
            secureTextEntry={true}
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

export default EditarSeguranca;

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