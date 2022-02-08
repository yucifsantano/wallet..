import React, { FunctionComponent, useState } from "react";
import {
    Button,
    StyleSheet,
    TextBase,
    TextComponent,
    TextInput,
  } from "react-native";
  import { Text, TextProps, View } from "../../components/Themed";
  import { COLORS } from "../../constants";
  import { RootTabScreenProps } from "../../types";
  
  export default function QRcodeScreen({
    navigation,
  }: RootTabScreenProps<"TabOne">) {
    
    return (
      <View style={styles.container}>
        <Text>QR code!</Text>
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
  