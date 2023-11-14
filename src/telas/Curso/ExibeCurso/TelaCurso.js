import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import imagem from '../../../../assets/imagens/cursos/algebra.jpg'

const TelaCurso = () => {
  return (
    <View style={styles.container}>
        <ScrollView>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.botaoFavoritar}>
                    <Ionicons name="star-outline" size={18} color="white" />    
                </TouchableOpacity>
                <View style={styles.informacoesContainer}>
                    <Image source={imagem} style={styles.informacoesImagem} resizeMode="stretch" />
                    <View tyle={styles.informacoesTextoContainer}>
                        <Text style={styles.texto}>Typescript</Text>
                        <Text style={styles.texto}>0.2</Text>
                        <Text style={styles.texto}>Atualização: 10/10/2023</Text>
                        <Text style={styles.texto}>Carga horária: 20 horas</Text>
                    </View>
                </View>

                
            </View>

        </ScrollView>
    </View>
  )
}

export default TelaCurso

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        paddingTop: StatusBar.currentHeight + 80,
    },
    texto: {
        fontSize: 16,
        color: "black",
        marginLeft: 16,
    },
    headerContainer:{
        backgroundColor: "white",
        height: 300,
    },
    botaoFavoritar:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        alignSelf: "flex-end",
        margin: 12,
        padding: 8,
        backgroundColor: "#ff0534",
        borderRadius: 4,
    },
    textoBotaoFavoritar: {
        fontSize: 16,
        color: "white"
    },
    informacoesContainer:{
        flexDirection: "row",
        padding: 16,

    },
    informacoesImagem: {
        width: 160,
        height: 180,
        backgroundColor: "purple",
        borderRadius: 8,
    },
    informacoesTextoContainer: {
        marginLeft: 16,
    }

    
})