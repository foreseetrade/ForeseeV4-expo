import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { Feather } from "@expo/vector-icons";
import AppTopBar4C from "../appComponents/AppTopBar4C";
import { colors4C } from "../asthetics";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

// ***** Good Implementation *****

// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>["name"];
//   color: string;
// }) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// }

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarActiveTintColor: colors4C.purple4C,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      {/* Bottom Navbar Tabs */}
      <Tabs.Screen
        name="index" // Name matched the routes - FileName
        options={{
          header: () => <AppTopBar4C isNumbersVisible={true} />,
          tabBarAccessibilityLabel: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="WalletScreen"
        options={{
          header: () => <AppTopBar4C isNumbersVisible={false} />,
          tabBarAccessibilityLabel: "Wallet",
          tabBarLabel: "Wallet",
          tabBarIcon: ({ color }) => (
            <Feather name="credit-card" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        options={{
          header: () => <AppTopBar4C isNumbersVisible={true} />,
          tabBarAccessibilityLabel: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
