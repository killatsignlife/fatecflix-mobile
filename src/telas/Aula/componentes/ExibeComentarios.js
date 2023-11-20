import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Alert, 
  Image,
  TextInput
} from 'react-native'
import React, { useState } from 'react'
import { comentarios } from '../../../mocks/comentarios'
import noPhoto from '../../../../assets/imagens/noPhoto.jpg'

const ExibeComentarios = () => {

  const [listaComentarios, setListaComentarios] = useState(comentarios)

  function getRandomInt() {
    min = Math.ceil(1000);
    max = Math.floor(5000);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  function adicionaComentario(texto){
    const novoComentario = {
      id: listaComentarios.length + 1,
      name: 'Usuario Logado',
      avatar: `https://robohash.org/${getRandomInt()}?set=set4`,
      comment: texto
    }
    setListaComentarios([...listaComentarios, novoComentario])
  }

  function obterComentarios() {
    return listaComentarios.map((comentario) => {
      return (
        <TouchableOpacity
          key={comentario.id}
          onPress={() => Alert.alert(`Usuario: ${comentario.name}  comentou: comentario.comment`)}
        >
          <View style={styles.comentario}>
            <View style={styles.containerUsuario}>
              <Image src={comentario.avatar} defaultSource={noPhoto} style={styles.avatar}/>
              <Text style={styles.textoItemTitulo}>{comentario.name}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.contentText}>{comentario.comment}</Text> 
            </View>
          </View>
        </TouchableOpacity>
      )
    })
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.textoTitulo}>Comentários</Text>
        <Comentar adicionaComentario={adicionaComentario}/>
        {obterComentarios()}
      </ScrollView>
    </View>
  )
}

const Comentar = ({ adicionaComentario }) => {
  const [comentario, setComentario] = useState('')

  function realizaComentario(texto){
    adicionaComentario(texto)
    setComentario('')
    Alert.alert('Comentário adicionado com sucesso!')

  }
  
  return(
    <View style={styles.containerComentar}>
      <Text style={styles.textoLabel}>Adicione um comentário</Text>
       <TextInput
                      style={styles.entrada}
                      value={comentario}
                      onChangeText={setComentario}
                      multiline
                      numberOfLines={3}
        />
         <TouchableOpacity 
                    style={styles.botao}
                    onPress={()=> realizaComentario(comentario)}>
                    <Text style={styles.textoBotao}>
                        Enviar
                    </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ExibeComentarios

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 200,
    paddingHorizontal: 8,
  },
  textoTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8
  },
  avatar: {
    width: 40,
    height: 40,
    borderWidth: 10,
    borderRadius: 20, 
  },
  comentario: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
  },
  content: {
    margin: 8,
  },
  contentText: {
    fontSize: 14,
    fontWeight: "bold",
    color: 'gray'
  },
  containerUsuario: {
    height: 60,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 2,
    marginVertical: 4,
    width: 120
  },
  textoItemTitulo: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerComentar:{
    margin: 4
  },
  entrada: {
    borderWidth: 2,
    borderColor: '#ddd',
    paddingHorizontal: 8,
    fontSize: 16,
    borderRadius: 8,
    width: '100%',
    marginTop: 4
  },
  botao: {
    backgroundColor: '#000',
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    borderRadius: 8,
    width: '20%',
  },
  textoBotao: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'red',
  },
  textoLabel: {
    fontSize: 14,
    color: 'gray'
  }

});