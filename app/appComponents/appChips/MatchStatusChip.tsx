import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

// @ts-ignore
import iconMatchLive from "../../../assets/icons/matchStatus/iconMatchLive.svg";
// @ts-ignore
import iconMatchCompleted from "../../../assets/icons/matchStatus/iconMatchCompleted.svg";
// @ts-ignore
import iconMatchUpcoming from "../../../assets/icons/matchStatus/iconMatchUpcoming.svg";

import { colors4C, imgBlurHash4C } from "@/app/asthetics";

const MatchStatusChip = ({ matchStatus }: { matchStatus: string }) => {
  return (
    <View>
      {matchStatus === "Live" ? (
        <View style={styles.statusContainer}>
          <Image
            style={styles.matchIcon}
            source={iconMatchLive}
            placeholder={imgBlurHash4C}
            // contentFit="cover"
            transition={8}
          />
          <Text style={styles.textStyle}>{matchStatus}</Text>
        </View>
      ) : matchStatus === "Upcoming" ? (
        <View style={styles.statusContainer}>
          <Image
            style={styles.matchIcon}
            source={iconMatchUpcoming}
            placeholder={imgBlurHash4C}
            // contentFit="cover"
            transition={8}
          />
          <Text style={styles.textStyle}>{matchStatus}</Text>
        </View>
      ) : matchStatus === "Completed" ? (
        <View style={styles.statusContainer}>
          <Image
            style={styles.matchIcon}
            source={iconMatchCompleted}
            placeholder={imgBlurHash4C}
            // contentFit="cover"
            transition={8}
          />
          <Text style={styles.textStyle}>{matchStatus}</Text>
        </View>
      ) : (
        <View style={styles.statusContainer}>
          <Text style={styles.textStyle}>{matchStatus || "Pending"}</Text>
        </View>
      )}
    </View>
  );
};

export default MatchStatusChip;

const styles = StyleSheet.create({
  matchIcon: {
    width: 12,
    height: 12,
    // objectFit: "contain",
  },

  textStyle: {
    color: colors4C.blue4C,
    fontSize: 14,
  },

  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "flex-start",
    height: 24,
    gap: 4,
  },
});
