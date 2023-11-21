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
        backgroundColor: "black",
        minHeight: 180
    },
    texto: {
        fontSize: 32,
        color: "white",
        marginLeft: 16,
    },
    imagem: {
        width: 100,
        height: 100,
        borderRadius: 200 / 2,
        alignSelf: "flex-end",
        marginHorizontal: 12,
        marginBottom: 12
    },
    containerLinks: {
        height: 100,
        width: "80%",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    containerItem: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        width: "30%",
        borderRadius: 12
    },
    textoLink:{
        fontSize: 13,
        color: 'black'
    }

})