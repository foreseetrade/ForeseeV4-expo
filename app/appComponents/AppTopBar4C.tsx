import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Image } from "expo-image";
import FeatherIcon from "@expo/vector-icons/Feather";
import { colors4C } from "../asthetics";
import { View } from "@/components/Themed";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const AppTopBar4C = ({ isNumbersVisible }: { isNumbersVisible: boolean }) => {
  const insets = useSafeAreaInsets();
  return (
    <Pressable
      style={{
        ...styles.topBar,
        paddingVertical: insets.top + 8,
        paddingHorizontal: 16,
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={() => {
            console.log("pressed Image");
          }}
        >
          <Image
            style={styles.image}
            source="https://picsum.photos/seed/696/3000/2000"
            placeholder={blurhash}
            contentFit="cover"
            transition={1000}
          />
        </Pressable>
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
    gap: 4,
  },
  flexColumn: {
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 360,
  },
});

export default AppTopBar4C;
