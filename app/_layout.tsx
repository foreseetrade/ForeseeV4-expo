import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, router, useNavigation } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

import { useColorScheme } from "@/components/useColorScheme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Linking from "expo-linking";
import { setExpoStorage } from "./services/expo-storage";
import { Platform } from "react-native";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  initialRouteName: "(auth)/GoogleLogin",
};

// Setting up DeepLinks in Expo :
// https://reactnavigation.org/docs/deep-linking

// const prefix = Linking.createURL("/");
const prefix = Linking.createURL("");
const linking = {
  prefixes: [prefix],
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const uri = Linking.useURL();
  console.log("url", uri);

  const [url, setURL] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

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
    // setExpoStorage("jwt", url.split("jwt=")[1]);

    if (url.includes("foresee://app")) {
      // setExpoStorage("jwt", url.split("jwt=")[1]);
      router.push("/(screens)/");
      setAuthenticated(true);
    }

    if (Platform.OS === "ios") {
      // SafariView.dismiss();
    } else {
      setURL("");
    }
  };

  const [loaded, error] = useFonts({
    // SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    // ...FontAwesome.font,
    Inter: require("../assets/fonts/Inter/static/Inter-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();

      if (authenticated) {
        router.replace("/(auth)/GoogleLogin");
      }
    }
  }, [loaded, authenticated]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        {/* <NavigationContainer
          independent={true}
          linking={linking}
          fallback={<Text>Loading..</Text>}
        > */}

        <Stack>
          <Stack.Screen name="(screens)" options={{ headerShown: false }} />
        </Stack>

        {/* </NavigationContainer> */}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
