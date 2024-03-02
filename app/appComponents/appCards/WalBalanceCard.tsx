import React from "react";
import { View, Text } from "react-native";
import { borderRadius4C, colors4C } from "@/app/asthetics";
import { StyleSheet } from "react-native";

const WalBalanceCard = () => {
  return (
    <View
      style={{
        backgroundColor: colors4C.purple4C,
        flexDirection: "column",
        padding: 16,
        alignItems: "center",
        borderRadius: borderRadius4C.small4C,
        width: "88%",
        // height: 120,
      }}
    >
      <Text style={{ ...styles.textStyle4C, fontSize: 20, paddingVertical: 8 }}>
        Current Balance
      </Text>
      <Text style={styles.textStyle4C}> ₹ 4000 </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle4C: {
    color: colors4C.light4C,
    fontSize: 30,
  },
});
export default WalBalanceCard;
