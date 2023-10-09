import { StyleSheet, View, Image, Text, ScrollView } from 'react-native'
import React from 'react'
import Secao from './componentes/Secao';
import { dadosPessoais, dadosAcademicos} from '../../mocks/perfil';
import Lista from './componentes/Lista';

const Topo = () => {
  return (
      <View style={styles.container}>
        <View style={styles.containerFoto}>
          <Image style={styles.imagem} source={require('../../../assets/imagens/vendramel.png')} />
          <Text style={styles.nome}>Wilson Vendramel</Text>
          <Text style={styles.nomeUsuario}>@vendramel</Text>
        </View>
        <Secao titulo="Dados Pessoais" campos={dadosPessoais} />
        <Secao titulo="Dados Acadêmicos" campos={dadosAcademicos} />
        <Text style={styles.textoEditar}>Editar Informações</Text>
      </View>
  )
}


const Perfil = () => {

  return (
    <Lista topo={<Topo />}/>
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
    fontSize: 17,
    textAlign: "center",
    color: "rgb(86,80,76)"
  },
  textoEditar: {
    padding: 12,
    fontSize: 17,
    fontWeight: "bold",
    color: "#231d19",
  }
})

