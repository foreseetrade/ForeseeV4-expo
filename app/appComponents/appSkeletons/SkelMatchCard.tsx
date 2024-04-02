import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/base";
import { sizes4C } from "@/app/asthetics";
import CustomLinearGradient from "@/app/styles/CustomLinearGrad";

const SkelMatchCard = () => {
  return (
    <View style={{ padding: sizes4C.small4C }}>
      <Skeleton
        LinearGradientComponent={CustomLinearGradient}
        animation="pulse"
        width={"100%"}
        height={240}
        style={{ borderRadius: sizes4C.small4C }}
      />
    </View>
  );
};

export default SkelMatchCard;

const styles = StyleSheet.create({});
