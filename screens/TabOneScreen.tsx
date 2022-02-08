import React, { FunctionComponent, useState } from "react";
import {
  Button,
  StyleSheet,
  TextBase,
  TextComponent,
  TextInput,
} from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, TextProps, View } from "../components/Themed";
import { COLORS } from "../constants";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  
  return (
    
    <View style={styles.container}>
      <Text>Prueba de Input</Text>

      <TextInput 
        style={{
          color: COLORS.red,
          bottom:5,
          alignItems:'flex-end'
        }}>
          Escribe un texto 
      </TextInput>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    bottom: 45,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

