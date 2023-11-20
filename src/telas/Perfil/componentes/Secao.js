import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { PerfilContext } from '../../../context/Perfil'

const Secao = () => {
    const { dadosPessoais, dadosAcademicos } = useContext(PerfilContext)

    return (
        <>
        <View style={styles.container}>
            <Text style={styles.nomeSecao}>Dados Pessoais</Text>
            <View style={styles.containerInfo} >
                <View style={styles.campo}>
                    <Text style={styles.nomeCampo}>Nascimento</Text>
                    <Text style={styles.conteudoCampo}>{dadosPessoais.nascimento}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.nomeCampo}>cpf</Text>
                    <Text style={styles.conteudoCampo}>{dadosPessoais.cpf}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.nomeCampo}>email</Text>
                    <Text style={styles.conteudoCampo}>{dadosPessoais.email}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.nomeCampo}>perfil</Text>
                    <Text style={styles.conteudoCampo}>{dadosPessoais.perfil}</Text>
                </View>
            </View>
        </View>
        <View style={styles.container}>
            <Text style={styles.nomeSecao}>Dados Acadêmicos</Text>
            <View style={styles.containerInfo} >
                <View style={styles.campo}>
                        <Text style={styles.nomeCampo}>curso</Text>
                        <Text style={styles.conteudoCampo}>{dadosAcademicos.curso}</Text>
                </View>
                <View style={styles.campo}>
                        <Text style={styles.nomeCampo}>período</Text>
                        <Text style={styles.conteudoCampo}>{dadosAcademicos.periodo}</Text>
                </View>
                <View style={styles.campo}>
                        <Text style={styles.nomeCampo}>ingresso</Text>
                        <Text style={styles.conteudoCampo}>{dadosAcademicos.ingresso}</Text>
                </View>
                <View style={styles.campo}>
                        <Text style={styles.nomeCampo}>ra</Text>
                        <Text style={styles.conteudoCampo}>{dadosAcademicos.ra}</Text>
                </View>
            </View>
        </View>
        </>

    )
}

export default Secao;


const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgb(214,208,204)",
    },
    containerInfo: {
        marginVertical: 8,
        marginHorizontal: 0,
        backgroundColor: "#FAF7F5",
        borderRadius: 8,
        padding: 4,
    },
    nomeSecao: {
        color: "#231d19",
        marginLeft: 16,
        marginTop: 4,
        fontSize: 17,
        fontWeight: "bold",
    },
    texto: {
        fontSize: 17,
    },
    campo: {
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingLeft: 12,
    },
    nomeCampo: {
        fontWeight: "bold",
        fontSize: 14,
        textTransform: "uppercase",
        width: 120,
        paddingVertical: 4,
    },
    conteudoCampo: {
        paddingVertical: 4,
        fontSize: 14,
        width: 210,
    }

})