import React from "react";
import { View, StyleSheet, ScrollView, Text, Image } from "react-native";
import HeaderRestaurante from "../components/HeaderRestaurante";

export function Prato() {
    return (
        <View style={styles.prato}>
            <Image source={require('../imgs/prato1.jpg')} style={styles.imagePrato} />
            <View style={styles.containerInfoPrato}>
                <Text style={styles.textoPrato} >Burger King</Text>
                <Text style={styles.precoPrato}>R$ 35,00</Text>
            </View>
        </View>
    )
}

export default function Restaurante() {
    return (
        <View style={styles.container}>
            <HeaderRestaurante />
            <View style={styles.containerTitle} >
                <Text style={styles.title}>Cardápio</Text>
            </View>
            <ScrollView>
                <Prato />
                <Prato />
                <Prato />
                <Prato />
            </ScrollView>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    title: {
        fontSize: 20,
        color: '#53dd3c',
        backgroundColor: 'white',
        width: 150,
        textAlign: 'center',
        marginLeft: 20,
        borderRadius: 10
    },
    containerTitle: {
        backgroundColor: '#91fa80',
        paddingTop: 20,
        paddingBottom: 20
    },
    prato: {
        margin: 20,
        width: 370,
    },
    imagePrato: {
        width: 370,
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    containerInfoPrato: {
        borderWidth: 1,
        borderColor: 'silver',
        marginTop: -30,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textoPrato: {
        fontSize: 18,
        color: '#304f2c'
    },
    precoPrato: {
        padding: 8,
        backgroundColor: '#D9D9D9',
        borderRadius: 20
    },
});