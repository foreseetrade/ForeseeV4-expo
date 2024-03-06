import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MatchCard from "../appComponents/appCards/MatchCard";
import YesNoSlider from "../appComponents/appCards/YesorNoSlider";

const MatchScreen = () => {
  return (
    <View>
      {/* <MatchCard /> */}
      <YesNoSlider />
    </View>
  );
};

export default MatchScreen;

const styles = StyleSheet.create({});
