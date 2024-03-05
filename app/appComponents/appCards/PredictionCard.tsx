import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import {
  borderRadius4C,
  colors4C,
  imgBlurHash4C,
  sizes4C,
  spacing4C,
} from "@/app/asthetics";

// @ts-ignore
import iconTeam from "../../../assets/images/logoTeams/DCLogo.png";

const PredictionCard = ({
  predStatus,
  predType,
  predAmt,
  predTimestamp,
  predTeams,
}: {
  predStatus: string;
  predType: string;
  predAmt: string;
  predTimestamp: string;
  predTeams: string[];
}) => {
  return (
    <View
      style={{
        backgroundColor: colors4C.light4C,
        padding: spacing4C.small4C,
        width: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            // alignContent: "center",
            alignItems: "center",
            gap: sizes4C.medium4C,
          }}
        >
          <Image
            style={styles.image}
            source={iconTeam}
            placeholder={imgBlurHash4C}
            contentFit="cover"
            transition={8}
          />
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 4,
            }}
          >
            <Text style={{ fontSize: 14, color: colors4C.gray4C }}>
              {predType} {predStatus}
            </Text>

            <Text style={{ fontSize: 14, color: colors4C.gray4C }}>
              {predTeams[0]} vs {predTeams[1]}
            </Text>
            <Text style={{ ...styles.textStyle, fontSize: 14 }}>
              {predTimestamp}
            </Text>
          </View>
        </View>
        <Text style={{ ...styles.textStyle, fontWeight: "bold", fontSize: 20 }}>
          ₹ {predAmt}
        </Text>
      </View>
    </View>
  );
};

export default PredictionCard;

const styles = StyleSheet.create({
  image: {
    width: 32,
    height: 32,
    borderRadius: borderRadius4C.small4C,
  },
  textStyle: {
    color: colors4C.blue4C,
  },
});
