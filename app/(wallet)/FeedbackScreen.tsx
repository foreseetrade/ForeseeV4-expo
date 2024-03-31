import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { colors4C, imgBlurHash4C, sizes4C } from "../asthetics";
import { Image } from "expo-image";

// @ts-ignore
import successFb from "../../assets/images/feedbacks/successTick.png";
import { router, useNavigation } from "expo-router";

const FeedbackScreen = () => {
  // const navigation = useNavigation();

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerTitle: "Success",
  //   });
  // });
  return (
    <>
      {
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={successFb}
            placeholder={imgBlurHash4C}
            contentFit="cover"
            transition={8}
          />
          <Text style={{ fontSize: 14 }}>
            Your Trade request has been received, we will confirm this trade
            only when we get an opposite match
          </Text>

          <TouchableOpacity
            onPress={() => router.replace("/")}
            style={styles.primaryBtn}
          >
            <Text style={styles.primaryBtnText}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      }
    </>
  );
};

export default FeedbackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: sizes4C.medium4C,
    gap: sizes4C.large4C,
    width: "100%",
  },
  primaryBtn: {
    width: "100%",
    backgroundColor: colors4C.purple4C,
    padding: sizes4C.small4C,
    borderRadius: sizes4C.small4C,
  },
  primaryBtnText: {
    color: colors4C.white4C,
    textAlign: "center",
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: sizes4C.small4C,
  },
});
