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
      matchStatus: "Live",
      teamA: "CSK",
      teamB: "MI",
      cardSummary: "CSK 142/5 (16.5)",
      navigateTo: "/(match)/MatchScreen",
    },
    {
      matchStatus: "Live",
      teamA: "CSK",
      teamB: "RR",
      cardSummary: "Head to Head - 5 : 6",
      navigateTo: "/(match)/MatchScreen",
    },
    {
      matchStatus: "Upcoming",
      teamA: "DC",
      teamB: "MI",
      cardSummary: "Head to Head - 4 : 9",
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
      tossSummary: "RR won the Toss",
      showScores: true,
      matchStatus: "Live",
      teamA: "RR",
      teamAScore: "90/4",
      teamAOvers: 10.5,
      teamB: "CSK",
      teamBScore: "219/5",
      teamBOvers: 20,
      showSummary: true,
      matchSummary: "RR need 129 runs to win in 55 balls",
      navigateTo: "/(match)/MatchScreen",
    },
    {
      showTopIcon: false,
      matchNo: 2,
      tossSummary: "MI won the Toss",
      showScores: true,
      matchStatus: "Upcoming",
      teamA: "MI",
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
          <View style={{ flexDirection: "column", gap: sizes4C.small4C }}>
            {recentMatchesJSX}
          </View>
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
