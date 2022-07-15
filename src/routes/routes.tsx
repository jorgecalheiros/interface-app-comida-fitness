import { NavigationContainer } from "@react-navigation/native"
import Stack from "./stack"
import Tab from "./tab"

export default function Routes() {
    return (
        <NavigationContainer >
            <Stack />
        </NavigationContainer>
    )
}