import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type propsNavigationStack = {
    Tab: undefined,
    Home: undefined,
    Search: undefined,
    Restaurante: undefined
    Pedidos: undefined,
    User: undefined
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>