import React from "react";
import { AntDesign } from "@expo/vector-icons"
import { View, TouchableOpacity, StyleSheet, TextInput } from "react-native"

export default function Header() {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={"Insira o endereço da entrega: "}
            />
            <TouchableOpacity style={styles.button}>
                <AntDesign name="question" color={'black'} size={35} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#9cfa7a',
        paddingTop: 50,
        paddingStart: 14,
        paddingEnd: 14,
        paddingBottom: 10
    },
    input: {
        backgroundColor: '#fff',
        color: 'black',
        padding: 5,
        borderRadius: 6,
        paddingRight: 20,
        width: 330
    },
    button: {
        width: 44,
        height: 44,
        borderRadius: 44 / 2,
        borderWidth: 3,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }
})