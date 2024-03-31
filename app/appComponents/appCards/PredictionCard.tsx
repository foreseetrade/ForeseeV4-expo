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

import getTeamImageUrl from "../appUtils/functions/getImageUrl";

const PredictionCard = ({
  predStatus,
  predType,
  predAmt,
  predTimestamp,
  predTeam,
  predTeamOpponent,
}: {
  predStatus: string;
  predType: string;
  predAmt: string;
  predTimestamp: string;
  predTeam: string;
  predTeamOpponent: string;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        alignSelf: "stretch",
        borderBottomWidth: 0.2,
        borderColor: colors4C.purple4C,
        backgroundColor: colors4C.white4C,
        paddingHorizontal: spacing4C.medium4C,
        paddingVertical: spacing4C.small4C,
        borderRadius: borderRadius4C.small4C,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
          gap: sizes4C.medium4C,
        }}
      >
        {predTeam && (
          <>
            <Image
              style={styles.image}
              source={getTeamImageUrl(`${predTeam}Logo`)}
              placeholder={imgBlurHash4C}
              contentFit="cover"
              transition={8}
            />
          </>
        )}
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 4,
          }}
        >
          {predStatus && (
            <Text
              style={{
                fontSize: 12,
                color:
                  predStatus.toLowerCase() === "success"
                    ? colors4C.green4C
                    : predStatus.toLowerCase() === "pending"
                    ? colors4C.skyBlue4C
                    : colors4C.red4C,
              }}
            >
              {predType} {predStatus}
            </Text>
          )}

          {predTeam && (
            <Text style={{ fontSize: 12, color: colors4C.gray4C }}>
              {predTeam} vs {predTeamOpponent}
            </Text>
          )}

          {predTimestamp && (
            <Text style={{ ...styles.textStyle, fontSize: 12 }}>
              {predTimestamp}
            </Text>
          )}
        </View>
      </View>

      {predAmt && (
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: 16,
          }}
        >
          <Text
            style={{ ...styles.textStyle, fontWeight: "bold", fontSize: 20 }}
          >
            ₹ {predAmt}
          </Text>
          <Text
            style={{
              ...styles.textStyle,
              fontSize: 12,
              color: colors4C.green4C,
            }}
          >
            Win Potential - ₹ {predAmt}
          </Text>
        </View>
      )}
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
