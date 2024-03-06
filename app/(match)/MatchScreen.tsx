import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MatchCard from "../appComponents/appCards/MatchCard";
import YesNoSlider from "../appComponents/appCards/YesorNoSlider";
import { sizes4C } from "../asthetics";
import StatButton from "../appComponents/appButtons/StatButton";
import MatchPredCard from "../appComponents/appCards/MatchPredCard";

const MatchScreen = () => {
  return (
    <View style={styles.container}>
      <MatchCard />
      <MatchPredCard winPercentage={60} />
      <YesNoSlider teamA="DC" teamB="MI" teamAOdds={7} matchStadium="Chinnaswamy stadium" />
    </View>
  );
};

export default MatchScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "space-between",
    padding: sizes4C.small4C,
    gap: sizes4C.small4C,
  },
});
