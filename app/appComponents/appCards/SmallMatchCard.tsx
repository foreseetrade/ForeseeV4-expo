import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MatchStatusChip from "../appChips/MatchStatusChip";
import { colors4C, sizes4C } from "@/app/asthetics";
import { Image } from "expo-image";

// @ts-ignore
import iconTeam from "../../../assets/images/logoTeams/DCLogo.png";

const SmallMatchCard = ({ teamA, teamB, cardSummary }: any) => {
  return (
    <View style={styles.container}>
      <View style={{ padding: 4 }}>
        <MatchStatusChip matchStatus="Live" />
      </View>
      <View>
        <View style={styles.teamsContainer}>
          {/* <Text>{teamA}</Text> */}
          <Image source={iconTeam} style={{ width: 32, height: 32 }} />
          <Text>v/s</Text>
          {/* <Text>{teamB}</Text> */}
          <Image source={iconTeam} style={{ width: 32, height: 32 }} />
        </View>
        <Text style={styles.summary}>{cardSummary}</Text>
      </View>
    </View>
  );
};

export default SmallMatchCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    alignContent: "center",
    gap: sizes4C.small4C,
    padding: 4,
    borderRadius: sizes4C.small4C,
    elevation: 5,
    backgroundColor: colors4C.white4C,
    // Width - fit content
    alignSelf: "flex-start", // Add this line to fit the width to content length
  },
  teamsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "stretch",
    gap: sizes4C.small4C,
    backgroundColor: colors4C.light4C,
    borderWidth: 0.3,
    borderColor: colors4C.lightGray4C,
    padding: sizes4C.medium4C,
    borderRadius: sizes4C.small4C,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  summary: {
    backgroundColor: colors4C.lightBlue4C,
    padding: sizes4C.small4C,
    textAlign: "center",
    borderBottomLeftRadius: sizes4C.small4C,
    borderBottomRightRadius: sizes4C.small4C,
    alignSelf: "stretch",
  },
});
