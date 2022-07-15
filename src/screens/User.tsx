import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { FontAwesome, AntDesign, EvilIcons, Feather } from "@expo/vector-icons"

export function Icon() {
    return (
        <View style={styles.containerIcon}>
            <LinearGradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                style={styles.background}
            />
            <View style={styles.iconUser}>
                <FontAwesome name="user-circle-o" color={'white'} size={200} />
            </View>
        </View>
    )
}

export function Action({ nameAction, icon }: { nameAction: string, icon: any }) {
    return (
        <TouchableOpacity style={styles.action}>
            {icon}
            <Text style={styles.nameAction} >{nameAction}</Text>
        </TouchableOpacity>
    )
}

export default function User() {
    return (
        <View style={styles.container}>
            <Icon />
            <View style={styles.content}>
                <Action nameAction="Meus Dados" icon={<AntDesign name={'user'} color={'black'} size={40} />} />
                <Action nameAction="Endereços" icon={<EvilIcons name={'location'} color={'black'} size={40} />} />
                <Action nameAction="Pagamentos" icon={<AntDesign name={'creditcard'} color={'black'} size={40} />} />
                <Action nameAction="Configurações" icon={<Feather name={'settings'} color={'black'} size={40} />} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },
    containerIcon: {
        alignItems: 'center'
    },
    iconUser: {
        marginTop: 100
    },
    content: {
        marginTop: 50,
        margin: 20
    },
    nameAction: {
        marginLeft: 20,
        fontSize: 16
    },
    action: {
        backgroundColor: '#84ff89',
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        marginBottom: 20
    }
})