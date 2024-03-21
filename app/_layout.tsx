import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "@/components/useColorScheme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Linking from "expo-linking";
import { Text } from "react-native";
import { NativeBaseProvider, extendTheme } from "native-base";
import { colors4C } from "./asthetics";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  initialRouteName: "(screens)",
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
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

const theme = extendTheme({
  components: {
    Button: {
      // Can simply pass default props to change default behaviour of components.
      baseStyle: {
        rounded: "md",
      },
      defaultProps: {
        colorScheme: colors4C.purple4C,
      },
    },
    Heading: {
      // Can pass also function, giving you access theming tools
      baseStyle: ({ colorMode }: any) => {
        return {
          color: colorMode === "dark" ? "red.300" : "blue.300",
          fontWeight: "normal",
        };
      },
    },
  },
});

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
        <NativeBaseProvider theme={theme}>
          <Stack>
            <Stack.Screen name="(screens)" options={{ headerShown: false }} />
          </Stack>
        </NativeBaseProvider>
        {/* </NavigationContainer> */}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
