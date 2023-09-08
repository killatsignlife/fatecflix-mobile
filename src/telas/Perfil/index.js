import { StyleSheet, View, Image, Text } from 'react-native'
import React from 'react'

const Perfil = () => {

  return (
    <View style={styles.container}>
      <View style={styles.containerFoto}>
        <Image style={styles.imagem} source={ require('../../../assets/imagens/vendramel.png') }/>
      </View>
      <Text style={styles.nomeSecao}>Dados Pessoais</Text>
      <View  style={styles.containerInfo} >
        <Text style={styles.nome}>Wilson Vendramel</Text>
        <Text style={styles.nomeUsuario}>@vendramel</Text>
        <Text style={styles.texto}>Perfil: Aluno</Text>
        <Text style={styles.texto}>Curso: DSM</Text>
        <Text style={styles.texto}>Periodo: Manhã</Text>
        <Text style={styles.texto}>RA: 100100200</Text>
        <Text style={styles.texto}>CPF: 319.818.940-39</Text>
        <Text style={styles.texto}>email: vendramel@fatec.sp.gov.br</Text>
      </View>
    </View>
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
    height: 240,
  },
  imagem:{
    width: 200,
    height: 200,
    borderRadius: 200/2
  },
  containerInfo: {
    marginVertical: 16,
    marginHorizontal: 24,
    backgroundColor: "#FAF7F5",
    borderRadius: 8,
    padding: 6,
  },
  nome:{
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 24,
    color: "#231d19"
  },
  nomeUsuario: {
    fontSize: 18,
    textAlign: "center",
    color: "rgb(86,80,76)"
  },
  nomeSecao: {
    color: "#231d19",
    marginHorizontal: 24,
    marginTop: 8,
    fontSize: 18,
  },
  texto: {
    fontSize: 16,
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
