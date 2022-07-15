import React from "react";
import { View, StyleSheet, ScrollView, ImageBackground, Text } from "react-native";
import Header from "../components/Header";

export function Categoria({ title }: { title: string }) {
    return (
        <ImageBackground source={require('../imgs/saladas.jpg')} style={styles.categoria}>
            <Text style={styles.title}>{title}</Text>
        </ImageBackground>
    )
}

export default function Search() {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView style={styles.content}>
                <Categoria title="Marmitas" />
                <Categoria title="Lanches" />
                <Categoria title="Café da Manhã" />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    content: {
        margin: 20,
        marginTop: 50
    },
    categoria: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 240,
        marginBottom: 50
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
    },
});