import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Pedidos from "../screens/Pedidos";
import User from "../screens/User";
import { propsNavigationStack } from "./models";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons"

const { Navigator, Screen } = createBottomTabNavigator<propsNavigationStack>()

export default function Tab() {
    return (
        <Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'black',
                headerStyle: { backgroundColor: '#71b259' },
                tabBarActiveBackgroundColor: '#5dfd63',
                tabBarInactiveBackgroundColor: 'white',
                headerShown: false,
                tabBarItemStyle: {
                    paddingBottom: 5,
                    paddingTop: 5,
                },
                tabBarLabelStyle: {
                    fontWeight: 'bold',
                }
            }}
        >
            <Screen name="Home" component={Home} options={{
                title: 'Inicio', tabBarIcon: ({ size, color }) => (
                    <AntDesign name={'home'} color={color} size={size} />
                )
            }} />
            <Screen name="Search" component={Search} options={{
                title: 'Busca',
                tabBarIcon: ({ size, color }) => (
                    <AntDesign name={'search1'} color={color} size={size} />
                )
            }} />
            <Screen name="Pedidos" component={Pedidos} options={{
                title: 'Pedidos',
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons name={'silverware-fork-knife'} color={color} size={size} />
                )
            }} />
            <Screen name="User" component={User} options={{
                title: 'Perfil',
                tabBarIcon: ({ size, color }) => (
                    <AntDesign name="user" color={color} size={size} />
                )
            }} />
        </Navigator>
    )
}