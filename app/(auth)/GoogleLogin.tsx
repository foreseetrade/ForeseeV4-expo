import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { apiGoogleLogin } from "../services/BEApis/auth";
import { colors4C, sizes4C } from "../asthetics";

const GoogleLogin = () => {
  const fnGoogleLogin = async () => {
    console.log("Google Login");
    const res = await apiGoogleLogin();

    console.log(res);
  };

  return (
    <Pressable
      onPress={() => {
        fnGoogleLogin();
      }}
    >
      <Text style={styles.buttonText}>Login with Google</Text>
    </Pressable>
  );
};

export default GoogleLogin;

const styles = StyleSheet.create({
  buttonText: {
    color: colors4C.white4C,
    textAlign: "center",
    backgroundColor: colors4C.purple4C,
    padding: 8,
    borderRadius: sizes4C.small4C,
    margin: 8,
  },
});
