import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const AllMatchesScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Update header name when component mounts
    navigation.setOptions({
      headerTitle: "All Matches",
    });
  }, []);

  return (
    <View>
      <Text style={styles.container}>AllMatchesScreen</Text>
    </View>
  );
};

export default AllMatchesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
