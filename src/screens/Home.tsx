import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import FoodAgain from "../components/FoodAgain";
import Categorias from "../components/Categorias";
import Restaurantes from "../components/Restaurantes";

export default function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView>
                <FoodAgain />
                <Categorias />
                <Restaurantes />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
});