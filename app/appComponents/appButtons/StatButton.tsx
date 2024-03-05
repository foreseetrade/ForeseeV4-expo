import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Href, Link } from "expo-router";
import { colors4C, sizes4C } from "@/app/asthetics";

const StatButton = ({
  leftIcon,
  btnText,
  rightIcon,
  btnStatText,
  navigateTo,
}: any) => {
  return (
    <>
      <TouchableHighlight>
        <>
          <Link href={`${navigateTo as Href<string>}`} asChild>
            <View style={styles.btnCardWrap}>
              <Text style={styles.btnStatText}>{btnStatText}</Text>
              <View style={styles.btnWrap}>
                {/* <Image source={leftIcon} /> */}
                {leftIcon}
                <Text style={styles.textStyle}>{btnText}</Text>
                {/* <Image source={rightIcon} /> */}
                {rightIcon}
              </View>
            </View>
          </Link>
        </>
      </TouchableHighlight>
    </>
  );
};

export default StatButton;

const styles = StyleSheet.create({
  btnCardWrap: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: sizes4C.medium4C,
    paddingVertical: 4,
    backgroundColor: colors4C.light4C,
    borderWidth: 0.4,
    borderColor: colors4C.purple4C,
    borderRadius: sizes4C.small4C,
  },
  btnWrap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    gap: sizes4C.small4C,
    // backgroundColor: colors4C.white4C,
    // borderWidth: 0.4,
    borderColor: colors4C.purple4C,
    borderRadius: sizes4C.small4C,
    width: 120,
    height: 40,
  },

  textStyle: {
    color: colors4C.blue4C,
    fontSize: 14,
    fontWeight: "400",
  },
  btnStatText: {
    color: colors4C.blue4C,
    fontSize: 18,
    fontWeight: "600",
  },
});
