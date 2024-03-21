import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { colors4C } from "../asthetics";
import { useNavigation } from "expo-router";

const EditProfile = () => {
  const navigation = useNavigation();
  useEffect(() => {
    // Update header name when component mounts
    navigation.setOptions({
      headerTitle: "Trade",
    });
  }, []);

  return <View style={styles.container}></View>;
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flex: 1,
    gap: 16,
    // justifyContent: "center",
    alignItems: "center",
  },
});
