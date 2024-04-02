import React, { useState } from "react";
import { View, Text, PanResponder, Animated, StyleSheet } from "react-native";

// @ts-ignore
import ballImg from "../../../assets/images/ball.png";
import { colors4C, sizes4C } from "@/app/asthetics";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

const YesNoSlider = ({
  matchNo,
  teamA,
  teamB,
  teamAOdds,
  matchStadium,
}: any) => {
  const [sliderValue] = useState(new Animated.Value(0));
  const [isRouting, setIsRouting] = useState(false); // New state

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      Animated.event([null, { dx: sliderValue }])(event, gestureState);

      if (gestureState.dx > 136 && !isRouting) {
        console.log("Yes");
        setIsRouting(true); // Set the flag to prevent multiple calls
        router.push(("(predict)/yes/" + matchNo) as any);
        return;
      } else if (gestureState.dx < -136 && !isRouting) {
        console.log("No");
        setIsRouting(true); // Set the flag to prevent multiple calls
        router.push(`(predict)/no/${matchNo}` as any);
        return;
      }
    },
    onPanResponderRelease: () => {
      // Reset the flag when the user releases the pan responder
      setIsRouting(false);
    },
  });

  const translateX = sliderValue.interpolate({
    inputRange: [-150, 0, 150],
    outputRange: [-100, 0, 100],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>
        {" "}
        Will {teamA} beat {teamB} at the {matchStadium} tonight?
      </Text>
      <View style={styles.container}>
        <View style={styles.sliderContainer}>
          <LinearGradient
            colors={[
              "#FFF",
              "rgba(255, 255, 255, 0.25)",
              "rgba(255, 255, 255, 0.00)",
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              ...styles.sliderTextWrapper,
              borderBottomLeftRadius: 360,
              borderTopLeftRadius: 360,
            }}
          >
            <Text style={styles.label}>₹{teamAOdds} NO </Text>
          </LinearGradient>
          <Animated.Image
            source={ballImg}
            style={[styles.slider, { transform: [{ translateX }] }]}
            {...panResponder.panHandlers}
          />
          <LinearGradient
            colors={[
              "rgba(255, 255, 255, 0.00)",
              "rgba(255, 255, 255, 0.50)",
              "#FFF",
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              ...styles.sliderTextWrapper,
              borderBottomRightRadius: 360,
              borderTopRightRadius: 360,
            }}
          >
            <Text style={styles.label}>₹{10 - teamAOdds} YES </Text>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: sizes4C.large4C,
    backgroundColor: colors4C.purple4C,
    // height: 120,
    padding: sizes4C.medium4C,
    borderRadius: sizes4C.small4C,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: colors4C.white4C,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    // backgroundColor: "green",
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    // backgroundColor: "#ddd",
    borderRadius: 360,
    // overflow: "hidden",
    height: 48,
  },
  slider: {
    zIndex: 1,
    resizeMode: "cover",
    width: 64,
    height: 64,
    // backgroundColor: "red",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
  },
  sliderTextWrapper: {
    // backgroundColor: colors4C.white4C,
    // background: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.50) 43.01%, #FFF 100.02%);
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    width: "40%",
    height: "100%",
  },
});

export default YesNoSlider;
