/*
REFERENCIA PARA EL MENU INFERIOR:
https://www.youtube.com/watch?v=gPaBicMaib4
*/


/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';


import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import HomeScreenStack from './HomeScreenStack';
import SettingsScreenStack from './SettingsScreenStack';
import QRcodeScreenStack from './QRcodeScreenStack';

import { COLORS } from '../constants';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

 const stylesNav = StyleSheet.create({
  shadow: {
    backgroundColor: "white",
    height: 75,
  },
});

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function screenOptions(route:any, focused:any) {
  let iconName = "";
  let textName = "";

  switch (route.name) {
    case 'TabOne':
      iconName = 'credit-card';
      textName = 'Credit-card';
      break;
    case 'QRcode':
      iconName = 'qrcode';
      textName = 'QR code';
      break;
    case 'TabThreeA':
      iconName = 'map-pin';
      textName = 'Ubicación';
      break;
    case 'settingsscreenStack':
      iconName = 'cog';
      textName = 'Preferencias';
      break;

    default:
      break;
  }
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
      <FontAwesome 
        name={iconName}
        size={25}
        style={{
          color: focused ? '#000':'#b7b7b7',
          top: -10,
          marginBottom: -3
        }}
      />
      <Text style={{color:focused ? '#000':'#b7b7b7', fontSize: 11}}>
        {textName}
      </Text>
    </View>
  )
}

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="homescreenStack"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          ...stylesNav.shadow,
        },
        tabBarIcon: ({ focused }) => screenOptions(route, focused),
      })}
    >
      <BottomTab.Screen
        name="TabOne"
        component ={ TabOneScreen}
        options = {{ headerShown: false }}

        /*
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          //tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <FontAwesome
                name="credit-card"
                size={25}
                style={{
                  color: focused ? '#ffff49':'#b7b7b7',
                  top: -10,
                }}
              />
              <Text style={{color:focused ? '#ffff49':'#b7b7b7', fontSize: 12}}>
                Credit-card
              </Text>
            </View>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
        */
      />

      <BottomTab.Screen
        name="QRcode"
        component={QRcodeScreenStack}
        options = {{ headerShown: false }}
      />
      
      <BottomTab.Screen
        name="homescreenStack"
        component={HomeScreenStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <FontAwesome
              name="home"
              size={35}
              style={{
                color: focused ? COLORS.white:'#b7b7b7',
                backgroundColor: COLORS.primary,
                padding: 15,
                borderRadius: 60,
                top: -30,
              }}
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="TabThreeA"
        component={TabOneScreen}
        options = {{ headerShown: false }}
      />


      <BottomTab.Screen
        name="settingsscreenStack"
        component={SettingsScreenStack}
        options = {{ headerShown: false }}
      />
      
    </BottomTab.Navigator>

  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
