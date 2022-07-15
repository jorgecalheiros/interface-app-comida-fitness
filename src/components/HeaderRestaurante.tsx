import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, ImageBackground, TouchableOpacity } from "react-native"
import { AntDesign, Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../routes/models";

const windowWidth = Dimensions.get('window').width

export default function HeaderRestaurante() {
    const navigation = useNavigation<propsStack>()
    return (
        <View>
            <ImageBackground source={require('../imgs/hambur.jpg')} style={styles.image}>
                <TouchableOpacity style={styles.iconBack} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={35} color={"black"} />
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.content}>
                <View style={styles.subcontent}>
                    <Text style={styles.title}>MacDonalds</Text>
                    <Image source={require('../imgs/mac.jpg')} style={styles.logo} />
                    <View style={styles.estrelas}>
                        <AntDesign name={'star'} size={24} color={"#efce4a"} />
                        <AntDesign name={'star'} size={24} color={"#efce4a"} />
                        <AntDesign name={'star'} size={24} color={"#efce4a"} />
                        <AntDesign name={'star'} size={24} color={"#efce4a"} />
                        <AntDesign name={'star'} size={24} color={"#efce4a"} />
                    </View>
                </View>
                <View style={styles.endereco}>
                    <Text> Rua Victório Santim, N°29, Sala 11 - São Paulo, SP</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: windowWidth,
        height: 300,
    },
    iconBack: {
        marginTop: 50,
        marginLeft: 20,
        backgroundColor: 'white',
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        marginTop: -100
    },
    content: {
        padding: 20,
        paddingBottom: 40,
        paddingTop: 40,
    },
    subcontent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        width: 125
    },
    estrelas: {
        flexDirection: 'row'
    },
    endereco: {
        marginTop: 20
    },
})