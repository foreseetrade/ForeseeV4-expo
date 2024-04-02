import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/base";
import CustomLinearGradient from "@/app/styles/CustomLinearGrad";
import { sizes4C } from "@/app/asthetics";

const SkelSmallMatchCard = () => {
  return (
    <Skeleton
      LinearGradientComponent={CustomLinearGradient}
      animation="pulse"
      width={128}
      height={128}
      style={{ borderRadius: sizes4C.small4C }}
    />
  );
};

export default SkelSmallMatchCard;

const styles = StyleSheet.create({});
