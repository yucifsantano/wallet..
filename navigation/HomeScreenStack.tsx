import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/Home/HomeScreen";
import CryptoDetail from "../screens/Home/CryptoDetail";

const Stack = createNativeStackNavigator();

export default function HomeScreenStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="homeScreen"
                component={HomeScreen}
                options={{
                    title: 'PRINCIPAL',
                    headerTitleAlign: 'center',
                    headerTintColor: '#303030',
                    headerStyle: {
                      backgroundColor: '#f9f7f7'
                    },
                }}
            />
            <Stack.Screen
                name="cryptodetail"
                component={CryptoDetail}
            />
        </Stack.Navigator>
    )
}