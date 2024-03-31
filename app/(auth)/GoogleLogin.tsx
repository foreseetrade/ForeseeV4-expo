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
// @ts-ignore
import loginIllust from "../../assets/images/LoginIllust.png";
import { Divider } from "@gluestack-ui/themed";

const GoogleLogin = () => {
  const navigation = useNavigation();
  const [url, setURL] = useState("");

  const handleOpenURL = (url: string) => {
    console.log("url in GoogleLogin", url);
    //  Extract jwt and store it in Expostorage
    // foresee://app/login?jwt=${token}&user=${req.user}
    setExpoStorage("jwt", url.split("jwt=")[1]);
    setExpoStorage("localEmail", url.split("userEmail=")[1]);

    if (url.includes("foresee://app")) {
      setExpoStorage("jwt", url.split("jwt=")[1]);
      setExpoStorage("localEmail", url.split("userEmail=")[1]);
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
    async () => {
      if (getExpoStorage("jwt" as any) !== null) {
        router.push("/(tabs)/" as any);
      }
    };
  });

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

  useEffect(() => {
    // diable header
    navigation.setOptions({
      headerShown: false,
    });
    // navigation.setOptions({
    //   headerTitle: "Foresee",
    //   headerLeft: () => (
    //     <Image
    //       style={{ width: 64, height: 64 }}
    //       source={foreseeLogo}
    //       placeholder={imgBlurHash4C}
    //       // contentFit="cover"
    //       transition={8}
    //     />
    //   ),
    // });
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Foresee</Text>

        <Image
          style={{ width: 240, height: 240 }}
          source={loginIllust}
          placeholder={imgBlurHash4C}
          // contentFit="cover"
          transition={8}
        />

        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
          }}
        >
          Get started by creating an account
        </Text>

        <Divider
          style={{
            width: "100%",
            marginBottom: 16,
            marginTop: 16,
            opacity: 0.6,
          }}
        />
        <Pressable style={styles.btnWrap} onPress={handleGoogleLogin}>
          <Text style={styles.buttonText}>Login with Google</Text>
        </Pressable>
      </View>
    </>
  );
};

export default GoogleLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    padding: 32,
    backgroundColor: colors4C.light4C,
  },
  btnWrap: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: sizes4C.small4C,
    width: "100%",
    gap: 16,
  },
  buttonText: {
    color: colors4C.white4C,
    textAlign: "center",
    padding: 8,
    margin: 16,
    borderRadius: sizes4C.small4C,
    backgroundColor: colors4C.purple4C,
    width: "100%",
  },
  text: {
    color: colors4C.blue4C,
    textAlign: "left",
    fontSize: 24,
    fontWeight: "500",
  },
});
