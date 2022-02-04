import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from "../screens/Settings/SettingsScreen";
import Login from "../screens/Settings/Login";


const Stack = createNativeStackNavigator();

export default function SettingsScreenStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="settingsscreen"
                component={SettingsScreen}
                options={{
                    title: 'PREFERENCIAS',
                    headerTitleAlign: 'center',
                    headerTintColor: '#303030',
                    headerStyle: {
                      backgroundColor: '#f9f7f7'
                    },
                }}
            />

            <Stack.Screen
                name="login"
                component={Login}
                options={{
                    title: 'Iniciar sesión',
                    headerTitleAlign: 'center',
                    headerTintColor: '#303030',
                    headerStyle: {
                      backgroundColor: '#f9f7f7'
                    },
                }}
            />
        </Stack.Navigator>
    )
}