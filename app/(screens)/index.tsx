import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MatchCard from "../appComponents/appCards/MatchCard";
import MatchPredCard from "../appComponents/appCards/MatchPredCard";
import NumberPad from "../appComponents/appUtils/NumberPad";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      {/* <MatchCard /> */}
      {/* <MatchPredCard winPercentage={75} />  */}
      <NumberPad />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    margin: 16,
  },
});
