import { StyleSheet, ScrollView, View } from "react-native";
import React from "react";
import TeamLogoCard from "../appComponents/appCards/TeamLogoCard";
import SmallMatchCard from "../appComponents/appCards/SmallMatchCard";
import MatchCard from "../appComponents/appCards/MatchCard";
import CarouselComponent from "../appComponents/appUtils/Carousal";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SectionHeader from "../appComponents/appNavigators/SectionHeader";
import { colors4C, sizes4C } from "../asthetics";
import { Link } from "expo-router";

const HomeScreen = () => {
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

  const matchCardsData = [
    {
      matchStatus: "Upcoming",
      teamA: "DC",
      teamB: "MI",
      cardSummary: "RCB won by 7 wickets",
      navigateTo: "/(match)/MatchScreen",
    },
    {
      matchStatus: "Upcoming",
      teamA: "DC",
      teamB: "MI",
      cardSummary: "RCB won by 7 wickets",
      navigateTo: "/(match)/MatchScreen",
    },
    {
      matchStatus: "Upcoming",
      teamA: "DC",
      teamB: "MI",
      cardSummary: "RCB won by 7 wickets",
      navigateTo: "/(match)/MatchScreen",
    },
  ];

  const trendingMatchesJSX = matchCardsData.map((card, index) => (
    <SmallMatchCard
      key={index}
      matchStatus={card.matchStatus}
      teamA={card.teamA}
      teamB={card.teamB}
      cardSummary={card.cardSummary}
      navigateTo={card.navigateTo}
    />
  ));

  const recentMatches = [
    {
      showTopIcon: false,
      matchNo: 1,
      tossSummary: "RCB won the Toss",
      showScores: true,
      matchStatus: "Upcoming",
      teamA: "DC",
      teamAScore: "0/0",
      teamAOvers: 0,
      teamB: "MI",
      teamBScore: "0/0",
      teamBOvers: 0,
      showSummary: true,
      matchSummary: "Head to head: 16 - 15",
      navigateTo: "/(match)/MatchScreen",
    },
    {
      showTopIcon: false,
      matchNo: 2,
      tossSummary: "MI won the Toss",
      showScores: true,
      matchStatus: "Completed",
      teamA: "CSK",
      teamAScore: "150/5",
      teamAOvers: 20,
      teamB: "RCB",
      teamBScore: "145/8",
      teamBOvers: 20,
      showSummary: true,
      matchSummary: "Head to head: 10 - 12",
      navigateTo: "/(match)/MatchScreen",
    },
  ];

  const recentMatchesJSX = recentMatches.map((item, index) => (
    <MatchCard
      key={index}
      showTopIcon={item.showTopIcon}
      matchNo={item.matchNo}
      tossSummary={item.tossSummary}
      showScores={item.showScores}
      matchStatus={item.matchStatus}
      teamA={item.teamA}
      teamAScore={item.teamAScore}
      teamAOvers={item.teamAOvers}
      teamB={item.teamB}
      teamBScore={item.teamBScore}
      teamBOvers={item.teamBOvers}
      showSummary={item.showSummary}
      matchSummary={item.matchSummary}
      navigateTo={item.navigateTo}
    />
  ));

  return (
    <>
      <GestureHandlerRootView>
        <ScrollView style={styles.container}>
          <CarouselComponent />
          <SectionHeader
            headingName="IPL Teams"
            navigateTo="/(match)/AllMatchesScreen"
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
          {recentMatchesJSX}
        </ScrollView>
      </GestureHandlerRootView>
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
