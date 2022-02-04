import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Divider } from "react-native-elements";

export default function Login() {

    return(
        <ScrollView centerContent={true} style={styles.viewBody}>
            <Image 
                source={require("../../assets/img/5-tenedores-letras-icono-logo.png")}
                resizeMode="contain"
                style={styles.logo}
            />
            <View style={styles.ViewContainer}>
                <Text>Logon FORM</Text>
                <CreateAccount />
            </View>
            <Divider style={styles.divider} />
            <Text>Social Login</Text>
        </ScrollView>
    )
}

function CreateAccount() {
    return(
        <Text style={styles.textRegister}>
            ¿Aún no tienes una cuenta? {" "}
            <Text 
                style={styles.btnRegister}
                onPress={() => console.log("Registro...")}
            >Registrate
            </Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        backgroundColor: "#f9f7f7",
    },
    logo: {
        width: "100%" ,
        height: 150,
        marginTop: 20,
    },
    ViewContainer : {
        marginLeft: 40,
        marginRight: 40,
    },
    textRegister: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
    },
    btnRegister: {
        color: "#00a680",
        fontWeight: "bold",
    },
    divider: {
        backgroundColor: "#00a680",
        margin: 40,
    }
});
  