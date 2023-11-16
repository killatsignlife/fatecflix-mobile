import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <Image style={styles.imagem} source={require('../../../../assets/imagens/vendramel.png')} />
        <View style={styles.containerLinks}>
            <TouchableOpacity style={styles.containerItem} onPress={() => navigation.navigate("CursosAndamento")}>
                <Feather name="play" size={32} color="black" />
                <Text style={styles.textoLink}>Cursos em andamento</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerItem} onPress={() => navigation.navigate("Conquistas")}>
                <Feather name="award" size={32} color="black" />
                <Text style={styles.textoLink}>Conquistas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerItem} onPress={() => navigation.navigate("Favoritos")}>
                <Feather name="star" size={32} color="black" />
                <Text style={styles.textoLink}>Favoritos</Text>
            </TouchableOpacity>

        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightgrey",
        minHeight: 250
    },
    texto: {
        fontSize: 32,
        color: "black",
        marginLeft: 16,
    },
    imagem: {
        width: 100,
        height: 100,
        borderRadius: 200 / 2,
        alignSelf: "flex-end",
        margin: 12
    },
    containerLinks: {
        //backgroundColor: "indianred",
        height: 120,
        width: "80%",
        alignSelf: "center",
        flexDirection: "row",
    },
    containerItem: {
        justifyContent: "center",
        alignItems: "center",
        width: "33%",
    },
    textoLink:{
        fontSize: 13,
    }

})