import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const AppTopBar = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ ...styles.topBar, paddingTop: insets.top }}>
      <Text>AppTopBar</Text>
    </View>
  );
};

export default AppTopBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topBar: {
    backgroundColor: "red",
  },
});
