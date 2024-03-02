import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PredictionCard from "../appComponents/appCards/PredictionCard";
import { spacing4C } from "../asthetics";

const AllTransactionsScreen = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        padding: spacing4C.medium4C,
      }}
    >
      <PredictionCard
        predAmt="1000"
        predStatus="Pending"
        predTeams={["DC", "CSK"]}
        predType="Foresee"
        predTimestamp="2 hours ago"
      />
    </View>
  );
};

export default AllTransactionsScreen;

const styles = StyleSheet.create({});
