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
import { Href, Link, router } from "expo-router";

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
        <Link href={"/(tabs)/ProfileScreen" as Href<string>}>
          <Image
            style={styles.image}
            source="https://s3-alpha-sig.figma.com/img/0c52/bf10/e2be0ba114ea1535d61c8b0b3d69b898?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o1FRC0QVNAN6DuIUFAp3fY690gX3zubvVOS-9E-VlEFyS3L2AxgPDpiiFDnryVzHRz78nWfX-LBd8L7UjlLQmF6X2aZfA2gXVJX9-FysWgjFsXDDdi1-vqPe8D4gzezrkiB1vylAxW67BWD9-VyABfznMro-FwLn4cmV4p7AAeqP3Jlbo-fdnThn-DC595Y1sjb-5yBXej~xVoqq72a6z3SW7EhnOt-YOgNmaIpG2igQ2pnyRBLa94Flm9p6wffZn5L~7jD9xVP1F2NIcu-4oFbKFzDwVcBrraHEQ1TS7kjdsmP-ztx0B8kxgdkRHAydGCwMebO7TepLYMmtuaTqww__"
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
