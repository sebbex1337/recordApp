import HomePage from "./components/HomePage";
import Detailview from "./components/Detailview";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home">
                <Stack.Screen name="home" component={HomePage} />
                <Stack.Screen name="details" component={Detailview} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

