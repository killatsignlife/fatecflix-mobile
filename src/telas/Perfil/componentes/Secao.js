import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Secao = ({ titulo, campos }) => {
    listaDecampos = campos.map(campo => {
        return (
            <View style={styles.campo} key={campo.nome}>
                <Text style={styles.nomeCampo}>{campo.nome}:</Text>
                <Text style={styles.conteudoCampo}>{campo.conteudo}</Text>
            </View>
        )
    })

    return (
        <>
            <Text style={styles.nomeSecao}>{titulo}</Text>
            <View style={styles.containerInfo} >
                {listaDecampos}
            </View>
        </>
    )
}

export default Secao;


const styles = StyleSheet.create({
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