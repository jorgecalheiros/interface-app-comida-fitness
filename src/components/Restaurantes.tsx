import React from "react";
import { AntDesign } from "@expo/vector-icons"
import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../routes/models";

export function Restaurante() {
    const navigation = useNavigation<propsStack>();
    return (
        <TouchableOpacity style={styles.restaurante} onPress={() => navigation.navigate('Restaurante')} >
            <View style={styles.imageRestaurante}>
                <Image
                    style={styles.image}
                    source={require('../imgs/mac.jpg')}
                />
                <View style={styles.infoRestaurante}>
                    <Text style={styles.titleRestaurante}>MacDonald's</Text>
                    <Text style={styles.enderecoRestaurante}>
                        Rua Victório Santim, N° 29, Sala - 11 São Paulo, SP
                    </Text>
                </View>
            </View>
            <View style={styles.estrelas}>
                <AntDesign name={'star'} size={24} color={"yellow"} />
                <AntDesign name={'star'} size={24} color={"yellow"} />
                <AntDesign name={'star'} size={24} color={"yellow"} />
                <AntDesign name={'star'} size={24} color={"yellow"} />
                <AntDesign name={'star'} size={24} color={"yellow"} />
            </View>
        </TouchableOpacity>
    )
}

export default function Restaurantes() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Restaurantes</Text>
            <View style={styles.content}>
                <Restaurante />
                <Restaurante />
                <Restaurante />
            </View>
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
    image: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2
    },
    restaurante: {
        backgroundColor: '#a4fb9d',
        padding: 20,
        borderRadius: 16,
        marginTop: 10,
        marginBottom: 10
    },
    imageRestaurante: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoRestaurante: {
        marginLeft: 10
    },
    titleRestaurante: {
        fontSize: 22
    },
    enderecoRestaurante: {
        width: 230,
        fontSize: 15,
        marginTop: 20
    },
    estrelas: {
        marginTop: 20,
        flexDirection: 'row'
    }
})