import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MatchCard from "../appComponents/appCards/MatchCard";
import MatchPredCard from "../appComponents/appCards/MatchPredCard";
import NumberPad from "../appComponents/appUtils/NumberPad";
import { colors4C, sizes4C } from "../asthetics";
import StatButton from "../appComponents/appButtons/StatButton";
import { Feather } from "@expo/vector-icons";
import TradeScreen from "../(wallet)/TradeScreen";
import MatchScreen from "../(match)/MatchScreen";
import SmallMatchCard from "../appComponents/appCards/SmallMatchCard";

const HomeScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <SmallMatchCard
          teamA="DC"
          teamB="MI"
          cardSummary="RCB won by 7 wickets"
        />
        <SmallMatchCard
          teamA="DC"
          teamB="MI"
          cardSummary="RCB won by 7 wickets"
        />
        <SmallMatchCard
          teamA="DC"
          teamB="MI"
          cardSummary="RCB won by 7 wickets"
        />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: sizes4C.medium4C,
    overflow: "scroll",
  },
});
