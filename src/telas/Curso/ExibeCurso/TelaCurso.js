import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Feather } from 'react-native-vector-icons'
import Descricao from './componentes/Descricao'
import ListaAulasCurso from './componentes/ListaAulasCurso'
import { useRoute } from '@react-navigation/native'
import { CursosContext } from "../../../context/Cursos";

const TelaCurso = () => {


    const route = useRoute();
    const {
        cursoId,
        imagem,
        titulo,
        descricao,
        cargaHoraria,
        dataAtualizacao,
        mediaAvaliacao,
        aulas,
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
                    cursoId={cursoId}
                />
                <Descricao texto={descricao} />
                <ListaAulasCurso aulas={aulas} />
            </ScrollView>
            <BotaoMatricular />
        </View>
    )
}


function Header({ imagem, titulo, mediaAvaliacao, dataAtualizacao, cargaHoraria, cursoId }) {



    const { cursos, favoritos, setFavoritos } = useContext(CursosContext);

    const [ehFavorito, setEhFavorito] = useState(false)

    function favoritar(id) {
        const curso = cursos.find(curso => curso.cursoId === id);
        if (favoritos.find(favorito => favorito.cursoId === curso.cursoId)) {
            const novosFavoritos = favoritos.filter(favorito => favorito.cursoId !== curso.cursoId);
            setFavoritos(novosFavoritos);
            Alert.alert("Curso desfavoritado");
            return;
        } else {
            const novoFavorito = {
                id: favoritos.length + 1,
                cursoId: curso.cursoId,
                titulo: curso.titulo,
                modulos: 3,
                aulas: 12,
                exercicios: 5
            };
            setFavoritos([...favoritos, novoFavorito]);
            Alert.alert("Curso favoritado");
        }
    }

    function isFavorito(id) {
        if (favoritos.find(favorito => favorito.cursoId === id)) setEhFavorito(true)
        else setEhFavorito(false)
    }

    useEffect(() => {
        isFavorito(cursoId)
    }, [favoritos])




    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.botaoFavoritar} onPress={() => favoritar(cursoId)}>
                {
                    ehFavorito ? <Ionicons name="star" size={18} color="white" />
                        : <Ionicons name="star-outline" size={18} color="white" />
                }
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

function BotaoMatricular() {
    function matricular(cursoId) {
        Alert.alert("Não implementado")
    }
    return (
        <TouchableOpacity style={styles.botaoMatricular} onPress={() => matricular()}>
            <Text style={styles.textoBotaoMatricular}>Matricular</Text>
        </TouchableOpacity>
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
    },
    botaoMatricular: {
        backgroundColor: "#ff0539",
        width: 160,
        height: 46,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 32,
        alignSelf: "center",
    },
    textoBotaoMatricular: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase",
    }


})