import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/base";
import CustomLinearGradient from "@/app/styles/CustomLinearGrad";
import { colors4C, sizes4C } from "@/app/asthetics";

const SkelTransCard = () => {
  return (
    <View style={styles.container}>
      <Skeleton
        LinearGradientComponent={CustomLinearGradient}
        animation="wave"
        width={48}
        height={48}
        circle
        style={{}}
      />
      <Skeleton
        LinearGradientComponent={CustomLinearGradient}
        animation="wave"
        width={"96%"}
        height={48}
        style={{ borderRadius: sizes4C.small4C }}
      />
    </View>
  );
};

export default SkelTransCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: sizes4C.small4C,
    padding: sizes4C.small4C,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors4C.light4C,
  },
});
