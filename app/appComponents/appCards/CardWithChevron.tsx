import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { Image } from "expo-image";
import { Href, Link, router } from "expo-router";
import { colors4C, sizes4C } from "@/app/asthetics";

const CardWithChevron = ({
  leftIcon,
  rightIcon,
  cardText,
  navigateTo,
}: {
  leftIcon: any;
  rightIcon: any;
  cardText: string;
  navigateTo: string;
}) => {
  // useEffect for changing name in header

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          if (navigateTo === "(auth)/GoogleLogin") {
            router.replace({
              pathname: navigateTo as Href<string>,
            });
            return;
          }
          router.push({
            pathname: navigateTo as Href<string>,
          });
        }}
      >
        <>
          <View style={styles.cardWrap}>
            {/* <Image source={leftIcon} /> */}
            <View
              style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
            >
              {leftIcon}
              <Text style={styles.textStyle}>{cardText}</Text>
            </View>
            {/* <Image source={rightIcon} /> */}
            {rightIcon}
          </View>
        </>
      </TouchableOpacity>
    </>
  );
};

export default CardWithChevron;

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: "400",
    fontSize: sizes4C.medium4C,
    color: colors4C.blue4C,
  },
  cardWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: sizes4C.medium4C,
    backgroundColor: colors4C.light4C,
    borderWidth: 0.2,
    borderColor: colors4C.purple4C,
    borderRadius: sizes4C.small4C,
  },
});
