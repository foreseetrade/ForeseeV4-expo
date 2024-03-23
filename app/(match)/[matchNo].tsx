import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { apiGetMatchByMatchNo } from "../services/BEApis/match";
import MatchCard from "../appComponents/appCards/MatchCard";
import YesNoSlider from "../appComponents/appCards/YesorNoSlider";
import { sizes4C } from "../asthetics";
import StatButton from "../appComponents/appButtons/StatButton";
import MatchPredCard from "../appComponents/appCards/MatchPredCard";
import { useNavigation } from "expo-router";

const MatchDynamicPage = () => {
  const { matchNo } = useLocalSearchParams();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [matchFullData, setMatchFullData] = useState({} as any);

  const fnGetMatchByMatchNo = async () => {
    setLoading(true);
    console.log(matchNo);
    const res = await apiGetMatchByMatchNo(matchNo);
    console.log("Res fnGetMatchByMatchNo", res?.data);
    setMatchFullData(res?.data);

    setLoading(false);
  };

  useEffect(() => {
    // Update header name when component mounts
    navigation.setOptions({
      headerTitle: "Match",
    });
  }, []);

  useEffect(() => {
    fnGetMatchByMatchNo();
  }, []);

  return (
    <View style={styles.container}>
      <>
      {loading && <Text>Loading</Text>}
        {matchFullData && !loading && (
          <>
            <MatchCard
              showTopIcon={true}
              showScores={true}
              showRRs={true}
              showSummary={true}
              matchNo={matchFullData?.matchNo}
              tossSummary={`${matchFullData?.matchToss}`}
              matchStatus={matchFullData?.matchStatus}
              teamA={matchFullData?.matchTeamA}
              teamAScore={matchFullData?.matchTeamAScore}
              teamAOvers={matchFullData?.matchTeamAOvers}
              teamARR={matchFullData?.matchTeamARunRate}
              teamACRR={matchFullData?.matchTeamACRR}
              teamARRR={matchFullData?.matchTeamARRR}
              teamAOdds={matchFullData?.matchTeamAOdds}
              teamB={matchFullData?.matchTeamB}
              teamBScore={matchFullData?.matchTeamBScore}
              teamBOvers={matchFullData?.matchTeamBOvers}
              teamBRR={matchFullData?.matchTeamBRunRate}
              teamBRRR={matchFullData?.matchTeamBRRR}
              teamBCRR={matchFullData?.matchTeamBCRR}
              teamBOdds={matchFullData?.matchTeamBOdds}
              matchStadium={matchFullData?.matchVenue}
              matchSummary={matchFullData?.matchSummary}
            />
            <MatchPredCard
              teamA={matchFullData?.matchTeamA}
              teamB={matchFullData?.matchTeamB}
              teamAOdds={matchFullData?.matchTeamAOdds}
              winPercentage={matchFullData?.matchTeamAWinPrecentage}
            />
            <YesNoSlider
              matchNo={matchFullData?.matchNo}
              teamA={matchFullData?.matchTeamA}
              teamB={matchFullData?.matchTeamB}
              teamAOdds={matchFullData?.matchTeamAOdds}
              matchStadium={matchFullData?.matchVenue}
            />
          </>
        )}
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    padding: sizes4C.small4C,
    gap: sizes4C.medium4C,
  },
});

export default MatchDynamicPage;
