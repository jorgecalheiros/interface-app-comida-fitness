import React from "react";
import { Text, TouchableOpacity, StyleSheet, View, Image } from "react-native"

export default function FoodAgain() {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>Peça novamente</Text>
            <View style={styles.content}>
                <Image
                    style={styles.image}
                    source={require('../imgs/mac.jpg')}
                />
                <Text style={styles.text}>Restaurante MacDonalds: Salada á moda da casa...</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F3F3F3',
        padding: 15,
        margin: 10,
        borderWidth: 1,
        borderColor: '#93be9a',
        borderRadius: 15
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: '#3bd821',
        marginBottom: 10
    },
    text: {
        fontSize: 16,
        width: 280
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginRight: 12
    }

})
