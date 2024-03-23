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
import { colors4C, imgBlurHash4C, sizes4C } from "../asthetics";
import { openURL } from "expo-linking";
import { getExpoStorage, setExpoStorage } from "../services/expo-storage";
import { envEXPO_BE_DEV_URL, envEXPO_BE_URL } from "../config/envConfig";
import { router, useNavigation } from "expo-router";
import { Image } from "expo-image";

// @ts-ignore
import foreseeLogo from "../../assets/LogoRBG.png";

const GoogleLogin = () => {
  const navigation = useNavigation();
  const [url, setURL] = useState("");

  // Set up Linking
  useEffect(() => {
    Linking.addEventListener("url", (url) => handleOpenURL(url.url));
    Linking.getInitialURL().then((url: string | null) => {
      if (url) {
        handleOpenURL(url);
      }
    });
    return () => {
      if (Linking) {
      }
    };
  }, []);

  const handleOpenURL = (url: string) => {
    //  Extract jwt and store it in Expostorage
    // foresee://app/login?jwt=${token}&user=${req.user}
    setExpoStorage("jwt", url.split("jwt=")[1]);
    setExpoStorage("localEmail", url.split("email=")[1]);

    if (url.includes("foresee://app")) {
      setExpoStorage("jwt", url.split("jwt=")[1]);
      router.push("/(tabs)/" as any);
    }

    if (Platform.OS === "ios") {
      // SafariView.dismiss();
    } else {
      setURL("");
    }
  };

  const handleGoogleLogin = async () => {
    console.log("Login with Google", url);
    // openURL("http://localhost:3000/user/google");
    openURL(`https://foresee-code4ai.koyeb.app/user/google`);
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Foresee",
      headerLeft: () => (
        <Image
          style={{ width: 64, height: 64 }}
          source={foreseeLogo}
          placeholder={imgBlurHash4C}
          // contentFit="cover"
          transition={8}
        />
      ),
    });
  }, []);

  return (
    <Pressable style={styles.btnWrap} onPress={handleGoogleLogin}>
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
    padding: 8,
    margin: 16,
    borderRadius: sizes4C.small4C,
    backgroundColor: colors4C.purple4C,
    width: "96%",
  },
});
