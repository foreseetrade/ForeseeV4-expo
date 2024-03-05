import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Image } from "expo-image";
import FeatherIcon from "@expo/vector-icons/Feather";
import { colors4C, imgBlurHash4C } from "../asthetics";
import { View } from "@/components/Themed";
import { Link, router } from "expo-router";

const AppTopBar4C = ({ isNumbersVisible }: { isNumbersVisible: boolean }) => {
  const insets = useSafeAreaInsets();
  return (
    <Pressable
      style={{
        ...styles.topBar,
        paddingTop: insets.top + 8,
        paddingHorizontal: 16,
        paddingBottom: 8,
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* <Pressable
          onPress={() => {
            router.navigate("/(screeens)/ProfileScreen");
          }}
        > */}
        <Link href={"/(screens)/ProfileScreen"}>
          <Image
            style={styles.image}
            source="https://picsum.photos/seed/696/3000/2000"
            placeholder={imgBlurHash4C}
            contentFit="cover"
            transition={1000}
          />
        </Link>
        {/* </Pressable> */}
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          {isNumbersVisible && (
            <Pressable
              style={{
                backgroundColor: colors4C.lightBlue4C,
                padding: 4,
                paddingHorizontal: 8,
                borderRadius: 8,
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  color: colors4C.blue4C,
                }}
              >
                ₹4000
              </Text>
              <FeatherIcon
                name="credit-card"
                size={22}
                color={colors4C.blue4C}
              />
            </Pressable>
          )}
          {!isNumbersVisible && (
            <Pressable>
              <FeatherIcon
                name="credit-card"
                size={22}
                color={colors4C.blue4C}
              />
            </Pressable>
          )}
          <Pressable>
            <FeatherIcon name="bell" size={22} color={colors4C.blue4C} />
          </Pressable>
        </Pressable>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: colors4C.light4C,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    // gap: 8,
  },
  flexColumn: {
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 360,
  },
});

export default AppTopBar4C;
