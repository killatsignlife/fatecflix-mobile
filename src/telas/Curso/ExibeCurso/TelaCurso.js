import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Feather } from 'react-native-vector-icons'
import Descricao from './componentes/Descricao'
import ListaAulasCurso from './componentes/ListaAulasCurso'
import { useNavigation, useRoute } from '@react-navigation/native'
import { CursosContext } from "../../../context/Cursos";

const TelaCurso = () => {

    const route = useRoute();

    return (
        <View style={styles.container}>
            <ScrollView>
                <Header
                    imagem={route.params?.imagem}
                    titulo={route.params?.titulo}
                    mediaAvaliacao={route.params?.mediaAvaliacao}
                    dataAtualizacao={route.params?.dataAtualizacao}
                    cargaHoraria={route.params?.cargaHoraria}
                    cursoId={route.params?.cursoId}
                    
                />
                <Descricao texto={route.params?.descricao} />
                <ListaAulasCurso aulas={route.params?.aulas} />
            </ScrollView>
            <Botao cursoId={route.params?.cursoId} />
        </View>
    )
}


function Header({ imagem, titulo, mediaAvaliacao, dataAtualizacao, cargaHoraria, cursoId }) {

    const { cursos, favoritos, setFavoritos, cursoMatriculados, setCursosMatriculados } = useContext(CursosContext);

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


function Botao({ cursoId }) {
    const [ehMatriculado, setEhMatriculado] = useState(false)
    const { cursos, cursoMatriculados, setCursosMatriculados } = useContext(CursosContext);
    const navigation = useNavigation()

    function matricular(id) {
        const curso = cursos.find(curso => curso.cursoId === id);
        const novaMatricula = {
            id: cursoMatriculados.length + 1,
            cursoId: curso.cursoId,
            titulo: curso.titulo,
            progresso: 0
        };
        setCursosMatriculados([...cursoMatriculados, novaMatricula]);
        Alert.alert("Aluno matriculado com sucesso");

    }

    function isMatriculado(id) {
        if (cursoMatriculados.find(curso => curso.cursoId === id)) setEhMatriculado(true)
        else setEhMatriculado(false)
    }

    function continuar(id) {
        navigation.navigate({ name: "Aulas", params: { cursoId: id }} )
    }

    useEffect(() => {
        isMatriculado(cursoId)
    }, [cursoMatriculados])


    return (
        <>
            {
                ehMatriculado ? <BotaoContinuar continuar={continuar} cursoId={cursoId} /> : <BotaoMatricular matricular={matricular} cursoId={cursoId} />
            }
        </>
    )
}


function BotaoMatricular({ matricular, cursoId }) {
    return (
        <TouchableOpacity style={styles.botaoMatricular} onPress={() => matricular(cursoId)}>
            <Text style={styles.textoBotaoMatricular}>Matricular</Text>
        </TouchableOpacity>
    )
}

function BotaoContinuar({ cursoId, continuar }) {
    console.log(cursoId)
    return (
        <TouchableOpacity style={styles.botaoContinuar} onPress={() => continuar(cursoId)}>
            <Text style={styles.textoBotaoContinuar}>Continuar</Text>
            <Ionicons name="play-circle-outline" size={26} color="white" />
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
    },
    botaoContinuar: {
        backgroundColor: "#ff0539",
        width: 180,
        height: 46,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 32,
        alignSelf: "center",
        flexDirection: "row",
    },
    textoBotaoContinuar: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase",
        marginRight: 8
    }


})