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
import { config } from "@gluestack-ui/config";

import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { Gesture, GestureHandlerRootView } from "react-native-gesture-handler";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    // SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    // ...FontAwesome.font,
    Inter: require("../assets/fonts/Inter/static/Inter-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    console.log("Err in Navigation Stack ", error);
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          {/* <NavigationContainer
          independent={true}
          linking={linking}
          fallback={<Text>Loading..</Text>}
        > */}

          <Stack
            initialRouteName="(auth)/GoogleLogin"
            // screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>

          {/* </NavigationContainer> */}
        </ThemeProvider>
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}
