import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/Home/HomeScreen";
import CryptoDetail from "../screens/Home/CryptoDetail";
import Transaction from "../screens/Transaction";

const Stack = createNativeStackNavigator();

export default function HomeScreenStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="homeScreen"
                component={HomeScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="cryptodetail"
                component={CryptoDetail}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="transaction"
                component={Transaction}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}