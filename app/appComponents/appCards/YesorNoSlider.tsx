import React, { useState } from "react";
import { View, Text, PanResponder, Animated, StyleSheet } from "react-native";

// @ts-ignore
import ballImg from "../../../assets/images/ball.png";

const YesNoSlider = () => {
  const [sliderValue] = useState(new Animated.Value(0));

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      Animated.event([null, { dx: sliderValue }])(event, gestureState);

      // Check the direction and log the appropriate message
      if (gestureState.dx > 50) {
        console.log("Yes");
      } else if (gestureState.dx < -50) {
        console.log("No");
      }
    },
  });

  const translateX = sliderValue.interpolate({
    inputRange: [-150, 0, 150],
    outputRange: [-100, 0, 100],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <View style={styles.sliderTextWrapper}>
          <Text style={styles.label}>₹7</Text>
        </View>
        <Animated.Image
          source={ballImg}
          style={[styles.slider, { transform: [{ translateX }] }]}
          {...panResponder.panHandlers}
        />
        <View style={styles.sliderTextWrapper}>
          <Text style={styles.label}>₹3</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#ddd",
    borderRadius: 360,
    overflow: "hidden",
  },
  slider: { 
    resizeMode: "cover",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sliderTextWrapper: {
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    width: "32%",
  },
});

export default YesNoSlider;
