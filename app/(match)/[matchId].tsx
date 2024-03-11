import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const MatchPage = () => {
  const { matchId } = useLocalSearchParams();
  return (
    <View>
      <Text>MatchPage {matchId}</Text>
    </View>
  );
};

export default MatchPage;

const styles = StyleSheet.create({});
