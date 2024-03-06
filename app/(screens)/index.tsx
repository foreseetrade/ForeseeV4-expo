import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MatchCard from "../appComponents/appCards/MatchCard";
import MatchPredCard from "../appComponents/appCards/MatchPredCard";
import NumberPad from "../appComponents/appUtils/NumberPad";
import { colors4C, sizes4C } from "../asthetics";
import StatButton from "../appComponents/appButtons/StatButton";
import { Feather } from "@expo/vector-icons";
import TradeScreen from "../(wallet)/TradeScreen";

const HomeScreen = () => {
  return (
    <>
      <TradeScreen />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
