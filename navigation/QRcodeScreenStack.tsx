import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QRcode from '../screens/QRcode/QRcodeScreen';


const Stack = createNativeStackNavigator();

export default function SettingsScreenStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="qrcodescreen"
                component={QRcode}
                options={{
                    title: 'QR code',
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