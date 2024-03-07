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
      <MatchCard
        showTopIcon={true}
        showScores={true}
        showRRs={true}
        showSummary={true}
        matchNo={40}
        tossSummary="KKR opt to bowl"
        matchStatus="Live"
        teamA="DC"
        teamAScore={"219/5"}
        teamAOvers={20.0}
        teamARR={9.8}
        teamACRR={6.7}
        teamARRR={8.8}
        teamAOdds={7}
        teamB="MI"
        teamBScore={"90/5"}
        teamBOvers={20.0}
        teamBRR={7.9}
        teamBRRR={8.8}
        teamBCRR={7}
        teamBOdds={3}
        matchStadium="Chinnaswamy stadium"
        matchSummary="RCB won by 7 wickets"
      />
      <MatchPredCard winPercentage={60} />
      <YesNoSlider
        teamA="DC"
        teamB="MI"
        teamAOdds={7}
        matchStadium="Chinnaswamy stadium"
      />
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
    gap: sizes4C.medium4C,
  },
});
