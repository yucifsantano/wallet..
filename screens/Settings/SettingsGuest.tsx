import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function SettingsGuest() {
  const navigator = useNavigation();

  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        style={styles.image}
        source={require("../../assets/img/user-guest.jpg")}
        resizeMode="contain"
      />
      <Text style={styles.title}>Consulta tu perfíl</Text>
      <Text style={styles.description}>
        ¿Cómo describirías tu mejor restaurante? Busca y visualiza los mejores 
        restaurantes de una forma sencilla, vota cual te ha gustado más y 
        comenta como ha sido tu experiencia.
      </Text>
      <View style={styles.viewBtn}>
        <Button 
          title="Ver tu pefíl"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigator.navigate("login")}
        />
      </View>
    </ScrollView>
  );
    
}
const styles = StyleSheet.create({
  viewBody: {
    backgroundColor: "#f9f7f7",
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
    marginLeft: 25,
    marginRight: 25,
  },
  viewBtn: {
    flex: 1,
    alignItems: "center",
  },
  btnStyle: {
    backgroundColor: "#00a680"
  },
  btnContainer: {
    width: "70%"
  },
});
