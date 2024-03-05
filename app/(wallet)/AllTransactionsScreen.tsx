import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PredictionCard from "../appComponents/appCards/PredictionCard";
import { borderRadius4C, colors4C, spacing4C } from "../asthetics";

const AllTransactionsScreen = () => {
  const predictions = [
    {
      predAmt: "1000",
      predStatus: "Pending",
      predTeams: ["DC", "CSK"],
      predType: "Foresee",
      predTimestamp: "2 hours ago",
    },
  ];
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        paddingHorizontal: spacing4C.small4C,
        borderBottomWidth: 0.4,
        borderBottomColor: colors4C.purple4C,
        borderTopStartRadius: borderRadius4C.small4C,
      }}
    >
      {predictions.map((prediction, index) => (
        <PredictionCard
          key={index} // Make sure to include a unique key for each item in the array
          predAmt={prediction.predAmt}
          predStatus={prediction.predStatus}
          predTeams={prediction.predTeams}
          predType={prediction.predType}
          predTimestamp={prediction.predTimestamp}
        />
      ))}
    </View>
  );
};

export default AllTransactionsScreen;

const styles = StyleSheet.create({});
