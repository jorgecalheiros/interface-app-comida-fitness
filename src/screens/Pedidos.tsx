import React from "react";
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'

export function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.titleHeader}>Pedidos</Text>
        </View>
    )
}

export function Pedido() {
    return (
        <View style={styles.pedido}>
            <View style={styles.pedidoHeader}>
                <Image source={require('../imgs/mac.jpg')} style={styles.pedidoImage} />
                <View style={styles.pedidoInfo}>
                    <View style={styles.pedidoInfoHeader}>
                        <Text style={styles.pedidoTitle}>MacDonalds</Text>
                        <View style={styles.pedidoEstrelas}>
                            <Text style={styles.minhaAvaliacao}>Sua avaliação</Text>
                            <View style={styles.estrelas}>
                                <AntDesign name="star" color={'#efce4a'} size={24} />
                                <AntDesign name="star" color={'#efce4a'} size={24} />
                                <AntDesign name="star" color={'#efce4a'} size={24} />
                                <AntDesign name="star" color={'#efce4a'} size={24} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.endereco}>
                        <Text style={styles.textEndereco}>Rua Victório Santim, N°29, Sala 11 - São Paulo, SP</Text>
                    </View>
                </View>
            </View>
            <View style={styles.pedidoBody}>
                <View style={styles.card}>
                    <View style={styles.pratoInfo}>
                        <View style={styles.quantidade}>
                            <Text style={styles.number}>1</Text>
                        </View>
                        <View>
                            <View style={styles.pratoHeader}>
                                <Text style={styles.pratoTitle}>Salada à moda da Casa</Text>
                                <Text>R$ 18,00</Text>
                            </View>
                            <Text style={styles.taxaEntrega}>Taxa de Entrega: R$ 5,00</Text>
                        </View>
                    </View>
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.textButton}>Pedir novamente</Text>
                        </TouchableOpacity>
                        <View style={styles.precoTotal}>
                            <Text>R$ 23,00</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default function Pedidos() {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView style={styles.content}>
                <Pedido />
                <Pedido />
                <Pedido />
                <Pedido />
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
        marginTop: 20
    },
    header: {
        backgroundColor: '#a4fb9d',
        paddingTop: 50,
        paddingBottom: 20
    },
    titleHeader: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 20
    },
    pedido: {
        margin: 10,
    },
    pedidoHeader: {
        backgroundColor: '#a4fb9d',
        flexDirection: 'row',
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    pedidoImage: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2
    },
    pedidoInfo: {
        marginLeft: 10
    },
    pedidoInfoHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    pedidoTitle: {
        fontSize: 20,
    },
    pedidoEstrelas: {
        marginLeft: 10
    },
    minhaAvaliacao: {
        color: 'white',
        fontSize: 15
    },
    estrelas: {
        flexDirection: 'row'
    },
    endereco: {
        marginTop: 20
    },
    textEndereco: {
        width: 240,
        fontSize: 15
    },
    pedidoBody: {
        backgroundColor: '#D9D9D9',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    card: {
        margin: 20,
        padding: 10,
    },
    pratoInfo: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        flexDirection: 'row',
    },
    containerButton: {
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    button: {
        padding: 15,
        backgroundColor: '#56ed5c',
        borderRadius: 10,
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingRight: 20
    },
    precoTotal: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20
    },
    pratoHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 280
    },
    pratoTitle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    taxaEntrega: {
        marginTop: 10
    },
    quantidade: {
        width: 20,
    },
    number: {
        fontWeight: 'bold',
        fontSize: 10
    }
});