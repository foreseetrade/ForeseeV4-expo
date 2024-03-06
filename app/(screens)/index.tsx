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
import CarouselComponent from "../appComponents/appUtils/Carousal";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

const HomeScreen = () => {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <CarouselComponent />
        <ScrollView horizontal contentContainerStyle={styles.container}>
          <SmallMatchCard
            matchStatus="Live"
            teamA="DC"
            teamB="MI"
            cardSummary="RCB won by 7 wickets"
          />
          <SmallMatchCard
            matchStatus="Upcoming"
            teamA="DC"
            teamB="MI"
            cardSummary="RCB won by 7 wickets"
          />
          <SmallMatchCard
            matchStatus="Completed"
            teamA="DC"
            teamB="MI"
            cardSummary="RCB won by 7 wickets"
          />
        </ScrollView>
      </GestureHandlerRootView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    gap: sizes4C.medium4C,
  },
});
