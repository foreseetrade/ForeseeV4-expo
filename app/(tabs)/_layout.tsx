import React, { useEffect, useState } from "react";
import { Tabs, router } from "expo-router";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { Feather } from "@expo/vector-icons";
import AppTopBar4C from "../appComponents/AppTopBar4C";
import { colors4C } from "../asthetics";
import { getExpoStorage } from "../services/expo-storage";
import JWT from "expo-jwt";
import { TouchableHighlight } from "react-native-gesture-handler";

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
      {/* on tab click re render the component */}

      <Tabs.Screen
        name="index" // Name matched the routes - FileName
        options={{
          header: () => <AppTopBar4C isNumbersVisible={true} />,
          tabBarAccessibilityLabel: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            // <TouchableHighlight>
              <Feather name="home" size={24} color={color} />
            // </TouchableHighlight>
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
        name="ProfileScreenWrap"
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
