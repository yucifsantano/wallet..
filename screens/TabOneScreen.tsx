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
      <Text>Hola aaaaaaaaaaaaa1</Text>

    <TextInput style={{
      color: COLORS.red
    }}>Escribe un texto </TextInput>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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

