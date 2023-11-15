import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import imagemGenerica from '../../../../assets/imagens/cursos/algebra.jpg'
import { Feather } from 'react-native-vector-icons'
import Descricao from './componentes/Descricao'
import ListaAulas from './componentes/ListaAulas'
import ListaExercicios from './componentes/ListaExercicios'
import { useRoute } from '@react-navigation/native'

const TelaCurso = () => {
    const route = useRoute();
    const { 
        imagem, 
        titulo, 
        descricao, 
        cargaHoraria, 
        dataAtualizacao, 
        mediaAvaliacao 
    } = route.params;   

    return (
        <View style={styles.container}>
            <ScrollView>
                <Header 
                    imagem={imagem} 
                    titulo={titulo}
                    mediaAvaliacao={mediaAvaliacao}
                    dataAtualizacao={dataAtualizacao}
                    cargaHoraria={cargaHoraria}
                />
                <Descricao texto={descricao}/>
                <ListaAulas />
                <ListaExercicios />
            </ScrollView>
        </View>
    )
}


function Header({ imagem, titulo, mediaAvaliacao, dataAtualizacao, cargaHoraria}) {
    
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.botaoFavoritar}>
                <Ionicons name="star-outline" size={18} color="white" />
            </TouchableOpacity>
            <View style={styles.informacoesContainer}>
                <Image source={imagem} style={styles.informacoesImagem} resizeMode="stretch" />
                <View tyle={styles.informacoesTextoContainer}>
                    <View style={styles.campoTitulo}>
                        <Text style={styles.textoTitulo}>{titulo}</Text>
                    </View>
                    <View style={styles.campo}>
                        <Ionicons name="star-half-outline" size={22} color="black" />
                        <Text style={styles.texto}>{mediaAvaliacao}/5</Text>
                    </View>
                    <View style={styles.campo}>
                        <Feather name="edit-3" size={22} color="black" />
                        <Text style={styles.texto}>{dataAtualizacao}</Text>
                    </View>
                    <View style={styles.campo}>
                        <Ionicons name="timer-outline" size={22} color="black" />
                        <Text style={styles.texto}>{cargaHoraria}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default TelaCurso

const styles = StyleSheet.create({
    container: {
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
    textoTitulo: {
        fontSize: 19,
        fontWeight: "bold",
    },
    headerContainer: {
        backgroundColor: "white",
        height: 300,
    },
    botaoFavoritar: {
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
    informacoesContainer: {
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
    },
    campo: {
        flexDirection: 'row',
        height: 40,
        marginLeft: 10,
        width: "80%"
    },
    campoTitulo: {
        minHeight: 70,
        marginLeft: 10,
        width: "70%"
    }


})