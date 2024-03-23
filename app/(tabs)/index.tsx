import { StyleSheet, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import TeamLogoCard from "../appComponents/appCards/TeamLogoCard";
import SmallMatchCard from "../appComponents/appCards/SmallMatchCard";
import MatchCard from "../appComponents/appCards/MatchCard";
import CarouselComponent from "../appComponents/appUtils/Carousal";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SectionHeader from "../appComponents/appNavigators/SectionHeader";
import { colors4C, sizes4C } from "../asthetics";

import {
  apiGetMatchesByStatus,
  apiGetTrendingMatches,
} from "../services/BEApis/match";
import { getExpoStorage } from "../services/expo-storage";
import { router } from "expo-router";

const HomeScreen = () => {
  const [recentMatches, setRecentMatches] = useState([]);
  const [trendingMatches, setTrendingMatches] = useState([]);

  const teamLogoCardsData = [
    "RCB",
    "DC",
    "MI",
    "KKR",
    "CSK",
    "SRH",
    "PBKS",
    "RR",
    "GT",
    "LSG",
  ];

  const teamLogoCardsJSX = teamLogoCardsData.map((item, index) => (
    <TeamLogoCard teamName={item} key={index} />
  ));

  const fnGetTrendingMatches = async (): Promise<void> => {
    const res = await apiGetTrendingMatches();
    console.log("Res fnGetTrendingMatches", res?.data);
    setTrendingMatches(res?.data);
  };

  const trendingMatchesJSX = trendingMatches.map((card: any, index) => (
    <SmallMatchCard
      key={index}
      matchStatus={card.matchStatus}
      teamA={card.matchTeamA}
      teamB={card.matchTeamB}
      cardSummary={card.matchSummary}
      navigateTo={`(match)/${card.matchId}`}
    />
  ));

  const fnGetRecentMatches = async (): Promise<void> => {
    const res = await apiGetMatchesByStatus("Live");
    // console.log("Res fnGetRecentMatches", res);
    setRecentMatches(
      res?.data?.sort((a: any, b: any) => a.matchNo - b.matchNo)
    );
  };

  // Assuming recentMatches is a state variable of type RecentMatches
  const recentMatchesJSX = recentMatches.map((item: any, index: number) => (
    <MatchCard
      key={index}
      showTopIcon={item.showTopIcon}
      matchNo={item.matchNo}
      tossSummary={item.matchToss}
      showScores={item.showScores}
      matchStatus={item.matchStatus}
      teamA={item.matchTeamA}
      teamAScore={item.matchTeamAScore}
      teamAOvers={item.matchTeamAOvers}
      teamB={item.matchTeamB}
      teamBScore={item.matchTeamBScore}
      teamBOvers={item.matchTeamBOvers}
      showSummary={item?.matchStatus == "Live" ? true : false}
      matchSummary={item.matchSummary}
      navigateTo={`(match)/${item.matchNo}`}
    />
  ));

  useEffect(() => {
    fnGetTrendingMatches();
    fnGetRecentMatches();
  }, []);

  const fnCheckAuth = async () => {
    const storedJWT = await getExpoStorage("jwt");
    console.log("storedJWT in GoogleLogin Page", storedJWT);
    if (storedJWT === null) {
      router.push("/(auth)/GoogleLogin");
    } else {
      return;
    }
  };

  useEffect(() => {
    fnCheckAuth();
  }, []);
  return (
    <>
      <GestureHandlerRootView>
        <ScrollView style={styles.container}>
          <CarouselComponent />
          <SectionHeader
            headingName="IPL Teams"
            navigateTo="/(match)/AllTeamsMatchesScreen"
          />
          <ScrollView
            horizontal
            contentContainerStyle={styles.smallCardContainer}
          >
            {teamLogoCardsJSX}
          </ScrollView>
          <SectionHeader
            headingName="Trending Matches"
            navigateTo="/(match)/AllMatchesScreen"
          />
          <ScrollView
            horizontal
            contentContainerStyle={styles.smallCardContainer}
          >
            {trendingMatchesJSX}
          </ScrollView>
          <SectionHeader
            headingName="Recent Matches"
            navigateTo="/(match)/AllMatchesScreen"
          />
          <View style={{ flexDirection: "column", gap: sizes4C.small4C }}>
            {recentMatchesJSX}
          </View>
        </ScrollView>
      </GestureHandlerRootView>
      {/* <GoogleLogin /> */}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: sizes4C.medium4C,
    backgroundColor: colors4C.light4C,
  },
  smallCardContainer: {
    flexDirection: "row",
    gap: sizes4C.medium4C,
  },
});
