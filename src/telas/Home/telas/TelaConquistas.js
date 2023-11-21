import { StyleSheet, Modal, Text, View, Image, StatusBar, Alert, TouchableOpacity, Pressable} from 'react-native'
import React, {useState} from 'react'
import { Feather } from 'react-native-vector-icons'
import { cursoConquistas } from '../../../mocks/cursos'
import { ScrollView } from 'react-native-gesture-handler'

const TelaConquistas = () => {
  return (
    <View style={styles.container}>
      <Topo />
      <ScrollView style={styles.wrapperConquistas}>
      <View style={styles.containerConquistas}>
        {
          cursoConquistas.map((item) => {
            return(
              <ListItem  
                key={item.id} 
                sigla={item.sigla}
                titulo={item.titulo}
                data={item.data_finalizacao}                
              />
            )
          })
        }
      </View>
      </ScrollView>
    </View>
  )
}

const Topo = () => {
  return(
  <View style={styles.containerTopo}>
    <Image style={styles.imagem} source={require('../../../../assets/imagens/vendramel.png')} />
    <View style={styles.containerLinks}>
          <Feather name="award" size={52} color="white" />
          <Text style={styles.textoLink}>Conquistas</Text>
  </View>
</View>
  )
}

const ListItem = ({ sigla, titulo, data}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return(
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{ titulo }</Text>
            <Text style={styles.textoData}>{ data }</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.containerItem} onPress={() => setModalVisible(true)}>
          <Text style={styles.textoSigla}>{ sigla }</Text>
          <Text style={styles.textoTitulo}>{ titulo }</Text>
          <Text style={styles.textoData}>{ data }</Text>
    </TouchableOpacity>
    </View>
  )
}



export default TelaConquistas

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: StatusBar.currentHeight + 80,
  },
  containerTopo: {
    backgroundColor: "black",
    minHeight: 210
  },
  containerLinks: {
    height: 80,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  textoLink:{
    fontSize: 22,
    marginLeft: 18,
    color: "white"
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 200 / 2,
    alignSelf: "flex-end",
    margin: 12
  },
  containerItem: {
    backgroundColor: "white",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    borderRadius: 8,
    borderWidth: 1,
    margin: 8,
    width: 120,
    height: 120,
    marginHorizontal: 20
  },
  textoSigla:{
    fontSize: 32,
    fontWeight: "bold"
  },
  textoTitulo:{
    fontSize: 14,
  },
  textoData:{
    fontSize: 12,
  },
  containerConquistas: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 12
    
  },
  wrapperConquistas: {
    backgroundColor: "white",
    flexGrow: 1,
  }
 
})