import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { apiGoogleLogin } from "../services/BEApis/auth";
import { colors4C, sizes4C } from "../asthetics";
import { openURL } from "expo-linking";

const GoogleLogin = () => {
  // const fnGoogleLogin = async () => {
  //   console.log("Google Login");

  //   console.log(res);
  // };

  return (
    <Pressable style={styles.btnWrap} onPress={() => openURL("http://localhost:3000/user/google")}>
      <Text style={styles.buttonText}>Login with Google</Text>
    </Pressable>
  );
};

export default GoogleLogin;

const styles = StyleSheet.create({
  btnWrap :{
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: colors4C.white4C,
    textAlign: "center",
    backgroundColor: colors4C.purple4C,
    padding: 8,
    borderRadius: sizes4C.small4C,
    margin: 8,
  },
});
