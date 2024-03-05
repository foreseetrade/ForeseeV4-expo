import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Href, Link } from "expo-router";
import { colors4C, sizes4C } from "@/app/asthetics";

const TranButton = ({ navigateTo, btnText, leftIcon, rightIcon }: any) => {
  return (
    <>
      <Link href={`${navigateTo as Href<string>}`} asChild>
        <TouchableOpacity>
          <>
            <View style={styles.btnWrap}>
              {/* <Image source={leftIcon} /> */}
              {leftIcon}
              <View
                style={{
                  flexDirection: "column",
                  gap: 8,
                  alignItems: "center",
                }}
              >
                <Text style={styles.textStyle}>{btnText}</Text>
              </View>
              {/* <Image source={rightIcon} /> */}
              {rightIcon}
            </View>
          </>
        </TouchableOpacity>
      </Link>
    </>
  );
};

export default TranButton;

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: "400",
    fontSize: 12,
    color: colors4C.blue4C,
  },
  btnWrap: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: sizes4C.small4C,
    alignItems: "center",
    padding: sizes4C.small4C,
    backgroundColor: colors4C.light4C,
    borderWidth: 0.4,
    borderColor: colors4C.purple4C,
    borderRadius: sizes4C.small4C,
    // width: Dimensions.get("screen").width / 4,
    width: 104, //Best
    // fill the container width
    // width: "100%",
  },
});
