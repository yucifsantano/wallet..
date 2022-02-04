import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SettingsUser() {
    return (
        <View style={styles.container}>
          <Text>Settings User</Text>
        </View>
      );
    
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f7f7",
  },
});
