import {
  Linking,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { apiGoogleLogin } from "../services/BEApis/auth";
import { colors4C, sizes4C } from "../asthetics";
import { openURL } from "expo-linking";
import { setExpoStorage } from "../services/expo-storage";
import { envEXPO_BE_DEV_URL, envEXPO_BE_URL } from "../config/envConfig";

const GoogleLogin = () => {
  const [uri, setURL] = useState("");

  // Set up Linking
  useEffect(() => {
    Linking.addEventListener("url", (url) => handleOpenURL(url.url));
    Linking.getInitialURL().then((url: string | null) => {
      if (url) {
        handleOpenURL(url);
      }
    });
    return () => {
      Linking.removeAllListeners("url");
    };
  }, []);

  const handleOpenURL = (url: string) => {
    //  Extract jwt and store it in Expostorage
    // foresee://app/login?jwt=${token}&user=${req.user}
    setExpoStorage("jwt", url.split("jwt=")[1]);

    if (Platform.OS === "ios") {
      // SafariView.dismiss();
    } else {
      setURL("");
    }
  };

  //method that opens a given url
  //based on the platform will use either SafariView or Linking
  //SafariView is a better practice in IOS
  // const fnOpenURL = (url: string) => {
  //   // // Use SafariView on iOS
  //   if (Platform.OS === "ios") {
  //     // SafariView.show({
  //     //   url,
  //     //   fromBottom: true,
  //     // });
  //     setURL(url);
  //   } else {
  //     setURL(url);
  //   }
  // };

  return (
    <Pressable
      style={styles.btnWrap}
      onPress={() => {
        console.log("Login with Google", uri);
        // openURL(`https://foresee-code4ai.koyeb.app/user/google`);
        openURL(`http://localhost:3000/user/google`);
      }}
    >
      <Text style={styles.buttonText}>Login with Google</Text>
    </Pressable>
  );
};

export default GoogleLogin;

const styles = StyleSheet.create({
  btnWrap: {
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
