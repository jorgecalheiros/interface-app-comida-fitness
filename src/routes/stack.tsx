import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Restaurante from "../screens/Restaurante";
import { propsNavigationStack } from "./models";
import Tab from "./tab";

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

export default function Stack() {
    return (
        <Navigator initialRouteName="Tab" screenOptions={{ headerShown: false }}>
            <Screen name="Tab" component={Tab} />
            <Screen name="Restaurante" component={Restaurante} />
        </Navigator>
    )
}