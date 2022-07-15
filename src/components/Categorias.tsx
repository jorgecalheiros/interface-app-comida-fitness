import React from "react";
import { View, TouchableOpacity, Text, ScrollView, StyleSheet, Image } from "react-native"

export default function Categorias() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categorias</Text>

            <ScrollView horizontal={true} style={styles.content} showsHorizontalScrollIndicator={true} >
                <TouchableOpacity style={styles.categoria}>
                    <Image
                        style={styles.image}
                        source={require('../imgs/hambur.jpg')}
                    />
                    <Text style={styles.titleCategoria}>HAMBURGUER</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoria}>
                    <Image
                        style={styles.image}
                        source={require('../imgs/saladas.jpg')}
                    />
                    <Text style={styles.titleCategoria}>SALADAS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoria}>
                    <Image
                        style={styles.image}
                        source={require('../imgs/saladascomfrutas.jpg')}
                    />
                    <Text style={styles.titleCategoria}>SALADAS DE FRUTAS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoria}>
                    <Image
                        style={styles.image}
                        source={require('../imgs/frango.jpg')}
                    />
                    <Text style={styles.titleCategoria}>FRANGO</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    title: {
        padding: 10,
        fontSize: 20,
        color: '#3bd821',
        borderBottomWidth: 1,
        marginBottom: 10,
        borderBottomColor: 'silver'
    },
    content: {

    },
    categoria: {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 15
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 120 / 2
    },
    titleCategoria: {
        fontSize: 15,
        marginTop: 10,
        width: 150,
        textAlign: 'center'
    }
})