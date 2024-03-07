// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import MatchCard from "../appComponents/appCards/MatchCard";
// import MatchPredCard from "../appComponents/appCards/MatchPredCard";
// import NumberPad from "../appComponents/appUtils/NumberPad";
// import { colors4C, sizes4C } from "../asthetics";
// import StatButton from "../appComponents/appButtons/StatButton";
// import { Feather } from "@expo/vector-icons";
// import TradeScreen from "../(wallet)/TradeScreen";
// import MatchScreen from "../(match)/MatchScreen";
// import SmallMatchCard from "../appComponents/appCards/SmallMatchCard";
// import CarouselComponent from "../appComponents/appUtils/Carousal";
// import {
//   GestureHandlerRootView,
//   ScrollView,
// } from "react-native-gesture-handler";
// import SectionHeader from "../appComponents/appNavigators/SectionHeader";
// import TeamLogoCard from "../appComponents/appCards/TeamLogoCard";

// const HomeScreen = () => {
//   const matchCardsData = [
//     {
//       matchStatus: "Live",
//       teamA: "DC",
//       teamB: "MI",
//       cardSummary: "RCB won by 7 wickets",
//     },
//     {
//       matchStatus: "Upcoming",
//       teamA: "DC",
//       teamB: "MI",
//       cardSummary: "RCB won by 7 wickets",
//     },
//     {
//       matchStatus: "Completed",
//       teamA: "DC",
//       teamB: "MI",
//       cardSummary: "RCB won by 7 wickets",
//     },
//   ];

//   const matchCards = matchCardsData.map((card, index) => (
//     <SmallMatchCard
//       key={index} // Ensure each element has a unique key
//       matchStatus={card.matchStatus}
//       teamA={card.teamA}
//       teamB={card.teamB}
//       cardSummary={card.cardSummary}
//     />
//   ));

//   return (
//     <>
//       <GestureHandlerRootView>
//         <ScrollView style={styles.container}>
//           <CarouselComponent />
//           <SectionHeader
//             headingName="IPL Teams"
//             navigateTo="/(match)/AllMatchesScreen"
//           />
//           <ScrollView
//             horizontal
//             contentContainerStyle={styles.smallCardContainer}
//           >
//             <TeamLogoCard />
//             <TeamLogoCard />
//             <TeamLogoCard />
//             <TeamLogoCard />
//             <TeamLogoCard />
//             <TeamLogoCard />
//             <TeamLogoCard />
//             <TeamLogoCard />
//           </ScrollView>
//           <SectionHeader
//             headingName="Trending Matches"
//             navigateTo="/(match)/AllMatchesScreen"
//           />

//           <ScrollView
//             horizontal
//             contentContainerStyle={styles.smallCardContainer}
//           >
//             {matchCards}
//           </ScrollView>
//           <SectionHeader
//             headingName="Recent Matches"
//             navigateTo="/(match)/AllMatchesScreen"
//           />
//           <MatchCard
//             showTopIcon={false}
//             matchNo={1}
//             tossSummary="RCB won the Toss"
//             showScores={true}
//             matchStatus="Upcoming"
//             teamA="DC"
//             teamAScore="0/0"
//             teamAOvers={0}
//             teamB="MI"
//             teamBScore="0/0"
//             teamBOvers={0}
//             showSummary={true}
//             matchSummary="Head to head : 16 - 15"
//           />

//           <MatchCard
//             showTopIcon={false}
//             matchNo={1}
//             tossSummary="RCB won the Toss"
//             showScores={true}
//             matchStatus="Upcoming"
//             teamA="DC"
//             teamAScore="0/0"
//             teamAOvers={0}
//             teamB="MI"
//             teamBScore="0/0"
//             teamBOvers={0}
//             showSummary={true}
//             matchSummary="Head to head : 16 - 15"
//           />
//           <MatchCard
//             showTopIcon={false}
//             matchNo={1}
//             tossSummary="RCB won the Toss"
//             showScores={true}
//             matchStatus="Upcoming"
//             teamA="DC"
//             teamAScore="0/0"
//             teamAOvers={0}
//             teamB="MI"
//             teamBScore="0/0"
//             teamBOvers={0}
//             showSummary={true}
//             matchSummary="Head to head : 16 - 15"
//           />
//         </ScrollView>
//       </GestureHandlerRootView>
//     </>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     padding: sizes4C.medium4C,
//   },
//   smallCardContainer: {
//     flexDirection: "row",
//     gap: sizes4C.medium4C,
//   },
// });

import { StyleSheet, ScrollView, View } from "react-native";
import React from "react";
import TeamLogoCard from "../appComponents/appCards/TeamLogoCard";
import SmallMatchCard from "../appComponents/appCards/SmallMatchCard";
import MatchCard from "../appComponents/appCards/MatchCard";
import CarouselComponent from "../appComponents/appUtils/Carousal";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SectionHeader from "../appComponents/appNavigators/SectionHeader";
import { colors4C, sizes4C } from "../asthetics";

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

  const teamLogoCards = teamLogoCardsData.map((item, index) => (
    <TeamLogoCard teamName={item} key={index} />
  ));

  const matchCardsData = [
    {
      matchStatus: "Upcoming",
      teamA: "DC",
      teamB: "MI",
      cardSummary: "RCB won by 7 wickets",
    },
    {
      matchStatus: "Upcoming",
      teamA: "DC",
      teamB: "MI",
      cardSummary: "RCB won by 7 wickets",
    },
    {
      matchStatus: "Upcoming",
      teamA: "DC",
      teamB: "MI",
      cardSummary: "RCB won by 7 wickets",
    },
  ];

  const trendingMatches = matchCardsData.map((card, index) => (
    <SmallMatchCard
      key={index}
      matchStatus={card.matchStatus}
      teamA={card.teamA}
      teamB={card.teamB}
      cardSummary={card.cardSummary}
    />
  ));

  const recentMatches = Array.from({ length: 3 }, (_, index) => (
    <View key={index} style={{ marginBottom: sizes4C.small4C }}>
      <MatchCard
        key={index}
        showTopIcon={false}
        matchNo={1}
        tossSummary="RCB won the Toss"
        showScores={true}
        matchStatus="Upcoming"
        teamA="DC"
        teamAScore="0/0"
        teamAOvers={0}
        teamB="MI"
        teamBScore="0/0"
        teamBOvers={0}
        showSummary={true}
        matchSummary="Head to head : 16 - 15"
      />
    </View>
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
            {teamLogoCards}
          </ScrollView>
          <SectionHeader
            headingName="Trending Matches"
            navigateTo="/(match)/AllMatchesScreen"
          />
          <ScrollView
            horizontal
            contentContainerStyle={styles.smallCardContainer}
          >
            {trendingMatches}
          </ScrollView>
          <SectionHeader
            headingName="Recent Matches"
            navigateTo="/(match)/AllMatchesScreen"
          />
          <ScrollView>{recentMatches}</ScrollView>
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
