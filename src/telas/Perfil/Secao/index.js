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
        marginVertical: 16,
        marginHorizontal: 24,
        backgroundColor: "#FAF7F5",
        borderRadius: 8,
        padding: 6,
    },
    nomeSecao: {
        color: "#231d19",
        marginHorizontal: 24,
        marginTop: 8,
        fontSize: 18,
    },
    texto: {
        fontSize: 16,
    },
    campo: {
        flexDirection: "row",
        marginVertical: 4,
        justifyContent: "center",
    },
    nomeCampo: {
        fontWeight: "bold",
        fontSize: 14,
        textTransform: "uppercase",
        backgroundColor: "#b9b4af",
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        width: 120,
        padding: 6,
    },
    conteudoCampo: {
        padding: 6,
        fontSize: 14,
        backgroundColor: "#D6d0cc",
        width: 210,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
    }

})