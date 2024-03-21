import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import MatchCard from "../appComponents/appCards/MatchCard";
import YesNoSlider from "../appComponents/appCards/YesorNoSlider";
import { sizes4C } from "../asthetics";
import StatButton from "../appComponents/appButtons/StatButton";
import MatchPredCard from "../appComponents/appCards/MatchPredCard";
import { useNavigation } from "expo-router";

const MatchScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    // Update header name when component mounts
    navigation.setOptions({
      headerTitle: "Match",
    });
  }, []);

  return (
    <View style={styles.container}>
      <MatchCard
        showTopIcon={true}
        showScores={true}
        showRRs={true}
        showSummary={true}
        matchNo={40}
        tossSummary="CSK opt to bowl"
        matchStatus="Live"
        teamA="CSK"
        teamAScore={"219/5"}
        teamAOvers={20.0}
        teamARR={9.8}
        teamACRR={6.7}
        teamARRR={8.8}
        teamAOdds={7}
        teamB="RR"
        teamBScore={"90/4"}
        teamBOvers={10.5}
        teamBRR={7.9}
        teamBRRR={8.8}
        teamBCRR={7}
        teamBOdds={3}
        matchStadium="Chinnaswamy stadium"
        matchSummary="RR need 129 runs to win in 55 balls"
      />
      <MatchPredCard winPercentage={60} />
      <YesNoSlider
        teamA="RR"
        teamB="CSK"
        teamAOdds={7}
        matchStadium="Chepauk"
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
