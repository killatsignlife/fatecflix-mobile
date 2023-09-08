import { StyleSheet, View, Image, Text, ScrollView } from 'react-native'
import React from 'react'
import Secao from './Secao';

const Perfil = () => {

  pessoal = [{
    nome: "cpf",
    conteudo: "123.456.789-10"
  },
  {
    nome: "Nascimento",
    conteudo: "01/01/2000"
  }, {
    nome: "e-mail",
    conteudo: "vendramel@fatec.sp.gov.br"
  }, {
    nome: "perfil",
    conteudo: "Aluno"
  }

  ]

  academico = [{
    nome: "curso",
    conteudo: "Engenharia de Software"
  }, {
    nome: "Período",
    conteudo: "Manhã"
  }, {
    nome: "Ingresso",
    conteudo: "2021"
  }, {
    nome: "RA",
    conteudo: "100100200"
  }

  ]



  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerFoto}>
          <Image style={styles.imagem} source={require('../../../assets/imagens/vendramel.png')} />
          <Text style={styles.nome}>Wilson Vendramel</Text>
          <Text style={styles.nomeUsuario}>@vendramel</Text>
        </View>

        <Secao titulo="Dados Pessoais" campos={pessoal} />
        <Secao titulo="Dados Acadêmicos" campos={academico} />

      </View>
    </ScrollView>
  )
}

export default Perfil;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(214,208,204, 0.3)",
    flex: 1
  },
  containerFoto: {
    backgroundColor: "#FAF7F5",
    padding: 8,
    alignItems: 'center',
    justifyContent: "center",
    height: 320,
  },
  imagem: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2
  },
  nome: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 24,
    color: "#231d19",
    marginTop: 12,
  },
  nomeUsuario: {
    fontSize: 18,
    textAlign: "center",
    color: "rgb(86,80,76)"
  }
})


/// Vermelho Escuro:
/// Vermelho Claro:

/// Branco 1: #ffffff / rgb(255,255,255)
/// Branco 2: #f2f2f2 / rgb(242,242,242)
/// BRANCO 3: #FAF7F5 / rgb(250,247,245)
/// Cinza 1: #D6d0cc / rgb(214,208,204)
/// Cinza 2: #b9b4af / rgb(185,180,175)
/// Cinza 3: #89837f / rgb(137,131,127)
/// Cinza 4: #56504C / rgb(86,80,76)
/// preto 1: #231d19 /rgb(35,29,25)
