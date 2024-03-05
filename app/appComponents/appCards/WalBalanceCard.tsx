import React from "react";
import { View, Text } from "react-native";
import { borderRadius4C, colors4C, spacing4C } from "@/app/asthetics";
import { StyleSheet } from "react-native";

const WalBalanceCard = ({ cardHeight }: { cardHeight: number }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors4C.purple4C,
        padding: spacing4C.small4C,
        borderRadius: borderRadius4C.small4C,
        // width: "88%",
        height: cardHeight,
      }}
    >
      <Text style={{ ...styles.textStyle4C, fontSize: 16, paddingVertical: 2 }}>
        Current Balance
      </Text>
      <Text style={styles.textStyle4C}> ₹ 4000 </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle4C: {
    color: colors4C.light4C,
    fontSize: 24,
  },
});
export default WalBalanceCard;
