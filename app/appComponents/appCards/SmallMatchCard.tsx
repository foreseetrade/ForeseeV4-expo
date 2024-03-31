import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import MatchStatusChip from "../appChips/MatchStatusChip";
import { colors4C, sizes4C } from "@/app/asthetics";
import { Image } from "expo-image";

import getTeamImageUrl from "../appUtils/functions/getImageUrl";
import { Href, router } from "expo-router";

const SmallMatchCard = ({
  teamA,
  teamB,
  matchStatus,
  cardSummary,
  navigateTo,
}: any) => {
  // const handlePress = () => {
  //   if (!navigateTo) return;
  //   router.push(navigateTo);
  // };

  return (
    <Pressable
      onPress={() => {
        if (!navigateTo) return;
        if (matchStatus?.toLowerCase() === "completed") {
          return;
        }
        router.push({
          pathname: navigateTo as Href<string>,
        });

        // navigation.navigate(navigateTo);
      }}
    >
      <View style={styles.container}>
        <View style={{ padding: 4 }}>
          <MatchStatusChip matchStatus={matchStatus} />
        </View>
        <View>
          <View style={styles.teamsContainer}>
            {/* <Text>{teamA}</Text> */}
            <Image
              source={getTeamImageUrl(`${teamA}Logo`)}
              style={{ width: 32, height: 32 }}
            />
            <Text>v/s</Text>
            {/* <Text>{teamB}</Text> */}
            <Image
              source={getTeamImageUrl(`${teamB}Logo`)}
              style={{ width: 32, height: 32 }}
            />
          </View>
          <Text style={styles.summary}>{cardSummary}</Text>
        </View>
      </View>
    </Pressable>
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
    // elevation: 2,
    borderWidth: 0.2,
    borderColor: colors4C.purple4C,
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
    borderWidth: 0.4,
    borderColor: colors4C.lightGray4C,
    padding: sizes4C.medium4C,
    borderRadius: sizes4C.small4C,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  summary: {
    fontSize: 10,
    color: colors4C.gray4C,
    fontWeight: "bold",
    backgroundColor: colors4C.lightBlue4C,
    padding: sizes4C.small4C,
    textAlign: "center",
    borderBottomLeftRadius: sizes4C.small4C,
    borderBottomRightRadius: sizes4C.small4C,
    alignSelf: "stretch",
  },
});
